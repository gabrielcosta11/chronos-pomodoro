import styles from './styles.module.css';


type TimerComponentProps = {
    children: string
}

export function TimerComponent({children}: TimerComponentProps) {

    return (
        <>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}