import { ApiResponse } from "../types/ApiResponse";

export class ApiResponseMapper {
    static getApiResponseFromJson(to: any): ApiResponse {
        return {
            success: to.success,
            data: to.data,
            message: to.message
        }
    }
}