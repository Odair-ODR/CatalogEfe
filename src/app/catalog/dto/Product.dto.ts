import { BrandDtoResponse } from "./Brand.dto"

export interface ProductDtoResponse {
    productId: number
    description: string
    shortDescription: string
    basePrice: number
    imgUrl: string
    brand: BrandDtoResponse
}

