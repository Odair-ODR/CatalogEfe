'use client'

import { CloseIcon } from '@/app/shared/svg/icons'
import { ProductDtoResponse } from '../../dto/Product.dto'
import styles from './cart-popup.module.css'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Link from 'next/link'

export default function CartPopUp({ product, setCloseModal }: Readonly<{ product: ProductDtoResponse, setCloseModal: Dispatch<SetStateAction<boolean>> }>) {

    return (
        <div className={styles['modal-container']}>
            <div className={styles['modal-content']}>
                <div className={styles['modal-header']}>
                    <div className={styles['icon-container']} onClick={() => setCloseModal(false)}>
                        <CloseIcon />
                    </div>
                    <h2>Has agregado este producto a tu carrito</h2>
                </div>
                <div className={styles['modal-body']}>
                    <table className={styles['custom-table']}>
                        <tbody>
                            <tr>
                                <td><img src={product.imgUrl} alt="" /></td>
                                <td>{product.description}</td>
                                <td>{product.basePrice}</td>
                                <td>
                                    <InputQuantity quantity={1} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className={styles['modal-footer']}>
                    <button className={styles['btn-next']} onClick={() => setCloseModal(false)}>Seguir comprando</button>
                    <Link href={'/cart'} className={styles['btn-cart']}>Ir al carrito</Link>
                </div>
            </div>
        </div>
    )
}

export function InputQuantity({quantity} : Readonly<{quantity: number}>) {
    const [count, setCount] = useState(quantity)
    const next = () => {
        setCount(count+1)
    }

    const previus = () => {
        if (count - 1 < 1)
            return;
        setCount(count - 1)
    }

    return (
        <div className={styles['input-container']}>
            <label onClick={previus}>-</label>
            <input type="text" value={count} />
            <label onClick={next}>+</label>
        </div>
    )
}