
import { ProductCards } from './components/card/product-card/product-card'
import CartPopUp from './components/popup/cart-popup';
import { ProductDtoResponse } from './dto/Product.dto'
import styles from './page.module.css'
import CatalogService from './services/catalog.service'

export default async function Catalog() {
    const products: ProductDtoResponse[] = await CatalogService.getProducts();
    return (
        <div className={styles['catalog-body']}>
            <ProductCards products={products} />
        </div>
    )
}