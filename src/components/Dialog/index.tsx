import type { ToastContentProps } from 'react-toastify';
import styles from './styles.module.css';
import { DeafultButton } from '../DeafultButton';
import { ThumbsDown, ThumbsUp } from 'lucide-react';


export function Dialog({closeToast, data}: ToastContentProps<string>) {

    return (
        <>
            <div className={styles.dialogContainer}>
                <p>{data}</p>
                <div className={styles.containerButtons}>
                    <DeafultButton
                        icon={<ThumbsUp/>}
                        color='green'
                        title7-='Apagar histórico'
                        onClick={() => closeToast(true)}
                    />
                    <DeafultButton
                        icon={<ThumbsDown/>}
                        color='red'
                        title='Não apagar'
                        onClick={() => closeToast(false)}
                    />
                </div>
            </div>
        </>
    )
}