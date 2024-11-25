import { API_HOST } from "@/app/environment/dev";
import { ApiResponse } from "@/app/global/types/ApiResponse";
import { fetchCustom } from "@/app/Utils/apiRequest";
import { ProductDtoResponse } from "../dto/Product.dto";
import { ProductMapper } from "../mapper/product.mapper";
import { OrderDetailDto, OrderDetailDtoResponse, OrderDto } from "../dto/OrderDto";
import { OrderMapper } from "../mapper/order.mapper";

export default class CatalogService {
    private static readonly apiBase = API_HOST.API_SALE_EFE;

    static async getProducts(): Promise<ProductDtoResponse[]> {
        const uri = `${this.apiBase}/products`;
        const init: RequestInit = {
            method: 'GET'
        };

        const [result, error] = await fetchCustom(uri, init);
        if (error) return [];
        return ProductMapper.mapFromJsonToProductDtoResponse(result!.data);
    }

    static async createOrder(orderDto: OrderDto): Promise<number> {
        const uri = `${this.apiBase}/cart`;
        const init: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDto)
        };

        const [result, error] = await fetchCustom(uri, init);
        if (error) return 0;
        console.log(result);
        return result!.data;
    }

    
    static async getOrders(): Promise<OrderDetailDtoResponse[]> {
        const uri = `${this.apiBase}/cart/1`;
        const init: RequestInit = {
            method: 'GET'
        };

        const [result, error] = await fetchCustom(uri, init);
        if (error) return [];
        return OrderMapper.mapFromJsonToOrderDetailDtoResponse(result!.data);
    }

}