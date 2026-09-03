import { APIRequestContext } from '@playwright/test';

export class ProductHelper {

    constructor(
        private request: APIRequestContext
    ) {}

    async getProducts() {

        return await this.request.get(
            '/api/productsList'
        );
    }

    async searchProduct(
        keyword: string
    ) {

        return await this.request.post(
            '/api/searchProduct',
            {
                form: {
                    search_product: keyword
                }
            }
        );
    }
}