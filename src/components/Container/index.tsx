import type React from 'react';
import styles from './style.module.css';

type ContainerProps = {
    children: React.ReactNode,
    isFooter?: boolean
}

export function Container({children, isFooter = false}: ContainerProps) {
    return (
        <>
            <div className={`${styles.container} ${isFooter && styles.footer}`}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    )
}