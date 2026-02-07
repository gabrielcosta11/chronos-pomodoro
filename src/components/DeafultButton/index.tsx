import { CirclePlayIcon } from 'lucide-react';
import styles from './styles.module.css';
import type React from 'react';


type DeafultButtonProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red'
} & React.ComponentProps<'button'>

export function DeafultButton({icon, color = 'green', ...props}: DeafultButtonProps) {

    return (
        <>
            <button className={`${styles.button} ${styles[color]}`} type='submit'>
                {icon}
            </button>
        </>
    )
}