//> import { useMemo, useState } from 'react';
import styles from './sidebar.module.css'
import { catalogFilters } from '@/app/global/constants/data';
import { concatClassName } from '@/app/Utils/domUtils';
import { Logo } from '@/app/shared/svg/img';

export default function Sidebar() {
    //> const [menuId, setMenuId] = useState(1);

    const handleSidebarItem = (menuItem: any) => {
        //> setMenuId(menuItem.id)
    }

    /*const menusRender = useMemo(() => {
        return CatalogFilters.map((item: any) => ({
            ...item,
            selected: item.id == menuId
        }));
    }, [menuId])*/

    const getSidebarItems = () => {
        return catalogFilters.map((item: any) => (
            <li key={item.id} className={concatClassName(styles['sidebar-item'], item.selected ? styles.selected : '')}>
                <a>{item.description}</a>
            </li>
        ))
    }

    return (
        <div className={styles['sidebar']}>
            <div className={styles['sidebar-header']}>
                <div className={styles['logo-container']}>
                    <Logo />
                    <a>Catalog</a>
                </div>
            </div>
            <ul className={styles['sidebar-items']}>
                {getSidebarItems()}
            </ul>
        </div>
    )
}