import { ApiResponseMapper } from "../global/mapper/ApiResponse.mapper";
import { ApiResponse } from "../global/types/ApiResponse";

export async function fetchCustom(uri: string, init: RequestInit): Promise<[ApiResponse | null, Error | null]> {
    try {
        const response = await fetch(uri, init);
        if (!response.ok) return [null, new Error(`El servicio no response: ${response.text}`)];
        const result = await response.json();
        return [ApiResponseMapper.getApiResponseFromJson(result), null];
    } catch (error) {
        if (error instanceof Error) return [null, error];
        return [null, new Error(`Error desconocido: ${error}`)];
    }
}