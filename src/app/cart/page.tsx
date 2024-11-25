import { InputQuantity } from '../catalog/components/popup/cart-popup'
import CatalogService from '../catalog/services/catalog.service'
import styles from './page.module.css'

export default async function Page() {

    const orders = await CatalogService.getOrders();

    return (
        <div className={styles['cart-container']}>
            <div className={styles['cart-products']}>
                <table className={styles['cart-table']}>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(item => (
                                <tr>
                                    <td>
                                        <img src={item.product.imgUrl} alt="" />
                                    </td>
                                    <td> {item.product.description}</td>
                                    <td>{item.product.basePrice}</td>
                                    <td><InputQuantity quantity={item.quantity} /> </td>
                                    <td>{item.totalAmount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className={styles['cart-info']}>
                <div className={styles['cart-info-cupon']}>
                    <span>¿Tiene un cupón de descuento?</span>
                    <div className={styles['input-container']}>
                        <input type="text" placeholder='código' />
                        <button className={styles['btn-aplicar']}>Aplicar</button>
                    </div>
                </div>
                <div className={styles['cart-info-amount']}>
                    <table className={styles['table-amount']}>
                        <tbody>
                            <tr>
                                <td>Sub total</td>
                                <td>$100</td>
                            </tr>
                            <tr>
                                <td>Descuentos</td>
                                <td>$0</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles['cart-info-actions']}>
                    <button>
                        Pagar
                    </button>
                </div>
            </div>
        </div>
    )
}