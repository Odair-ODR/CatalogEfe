
import { ShoppingCartIcon } from '@/app/shared/svg/icons'
import styles from './header.module.css'
import Link from 'next/link'

export default function Header() {

    return (
        <div className={styles['header-container']}>
            <div className={styles['header-left']}>

            </div>
            <div className={styles['header-right']}>
                <Link className={styles['btn-cart']} href="/cart">
                    Ver carrito
                    <ShoppingCartIcon />
                </Link>
            </div>
        </div>
    )
}