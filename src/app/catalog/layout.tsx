import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import styles from './page.module.css'

export default function Layout ({children} : Readonly<{children: React.ReactNode}>) {
    return (
        <div className={styles['catalog-container']}>
        <Sidebar />
        <div className={styles['catalog-body-container']}>
            <Header />
            {children}
        </div>
    </div>
    )
}