import { ProductDtoResponse } from "../dto/Product.dto";

export class ProductMapper {
    static mapFromJsonToProductDtoResponse(obj: any): ProductDtoResponse[] {
        const products: ProductDtoResponse[] = [];
        if (obj == null || obj.length == 0) return products;
        Array.from(obj).forEach((item: any) => {
            const product: ProductDtoResponse = {
                productId: item.productId,
                description: item.description,
                shortDescription: item.shortDescription,
                basePrice: item.basePrice,
                imgUrl: item.imgUrl,
                brand: {
                    brandId: 0,
                    description: item.brand.description,
                    shortDescription: item.brand.shortDescription
                }
            }
            products.push(product);
        })
        return products;
    }
}