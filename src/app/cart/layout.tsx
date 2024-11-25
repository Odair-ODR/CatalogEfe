
import Link from 'next/link'
import styles from './page.module.css'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={styles['layout-cart']}>
            <div className={styles['layout-header']}>
                <Link href={'/catalog'}>Regresar al catálogo</Link>
            </div>
            {children}
        </div>
    )
}