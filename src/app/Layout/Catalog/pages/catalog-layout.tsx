import Header from '../components/header/header'
import Sidebar from '../components/sidebar/sidebar'
import styles from './catalog-layout.module.css'

export default function CatalogLayout() {

    return (
        <div className={styles['main-container']}>
            <Sidebar />
            <div className={styles['body-container']}>
                <Header />
           
            </div>
        </div>
    )
}