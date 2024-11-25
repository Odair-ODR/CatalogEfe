import { OrderDetailDtoResponse } from "../dto/OrderDto";

export class OrderMapper {
    static mapFromJsonToOrderDetailDtoResponse(obj: any): OrderDetailDtoResponse[] {
        const orders: OrderDetailDtoResponse[] = [];
        if (obj == null || obj.length == 0) return orders;
        Array.from(obj.orderDetail).forEach((item: any) => {
            const orderDetail: OrderDetailDtoResponse = {
                quantity: item.quantity,
                price: item.price,
                product: {
                    productId: item.product.productId,
                    description: item.product.description,
                    shortDescription: item.product.shortDescription,
                    basePrice: item.product.basePrice,
                    imgUrl: item.product.imgUrl,
                    brand: {
                        brandId: 0,
                        description: item.product.brand.description,
                        shortDescription: item.product.brand.shortDescription
                    }
                },
                totalAmount: item.product.basePrice * item.quantity
            }
            orders.push(orderDetail);
        })
        return orders;
    }
}