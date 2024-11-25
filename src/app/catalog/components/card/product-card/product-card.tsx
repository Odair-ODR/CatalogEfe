'use client'

import { ShoppingCartIcon } from '@/app/shared/svg/icons'
import styles from './product-card.module.css'
import { ProductDtoResponse } from '@/app/catalog/dto/Product.dto'
import CartPopUp from '../../popup/cart-popup';
import { MouseEventHandler, useState } from 'react';
import CatalogService from '@/app/catalog/services/catalog.service';
import { OrderDetailDto, OrderDto } from '@/app/catalog/dto/OrderDto';
import { NO_CLIENT_ID } from '@/app/global/constants/data';

export function ProductCards({ products }: Readonly<{ products: ProductDtoResponse[] }>) {
    const [showPopup, setShowPopup] = useState(false)
    const [product, setProduct] = useState<ProductDtoResponse | null>(null);
    async function handleClickCart(productId: number) {
        const productoFinded = products.find(x => x.productId === productId)!;
        setProduct(productoFinded);
        setShowPopup(!showPopup);

        const orderDto = getOrderDto(productoFinded);
        await CatalogService.createOrder(orderDto);
    }

    function getOrderDto(product: ProductDtoResponse): OrderDto {
        const orderDetail: OrderDetailDto [] = [];
        orderDetail.push({
            productId: product.productId,
            quantity: 1,
            price: product.basePrice
        })
        const orderDto : OrderDto = {
            customerId: NO_CLIENT_ID,
            orderDetail: orderDetail
        }
        return orderDto;
    }

    return (
        <>
            {
                products.map(item => (
                    <ProductCard key={item.productId} product={item} onClickCart={() => handleClickCart(item.productId)}  />
                ))
            }
            {showPopup && <CartPopUp product={ product!} setCloseModal={setShowPopup} />}
        </>
    );
}

export function ProductCard({ product, onClickCart }: Readonly<{ product: ProductDtoResponse, onClickCart: MouseEventHandler }>) {
    
    return (
        <div className={styles['card']}>
            <div className={styles['card-image']}>
                <img src={product.imgUrl} alt="" />
            </div>
            <div className={styles['card-info']}>
                <p>{product.description}</p>
            </div>
            <div className={styles['card-footer']}>
                <div className={styles['card-footer-info']}>
                    <span>${product.basePrice}</span>
                </div>
                <div className={styles['card-footer-icon']}>
                    <div className={styles['icon-container']} onClick={onClickCart}>
                        <ShoppingCartIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

