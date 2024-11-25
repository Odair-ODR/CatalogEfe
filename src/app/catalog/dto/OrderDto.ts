import { ProductDtoResponse } from "./Product.dto"

export interface OrderDto {
    customerId: number,
    orderDetail: OrderDetailDto[]
}

export interface OrderDetailDto {
    productId: number
    quantity: number
    price: number
}

export interface OrderDetailDtoResponse {
    quantity: number
    price: number
    totalAmount: number
    product: ProductDtoResponse
}