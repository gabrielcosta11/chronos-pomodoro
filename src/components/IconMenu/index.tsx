import styles from './styles.module.css';
import type React from 'react';

type IconMenuProps = {
    children: React.ReactNode
}


export function IconMenu({children}: IconMenuProps) {

    return (
        <>
            <div className={styles.iconBox}>
                {children}
            </div>
        </>
    )
}