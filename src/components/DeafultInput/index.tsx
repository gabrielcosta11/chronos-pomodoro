import styles from './styles.module.css';


type DeafultInputProps = {
    id: string;
    labelText?: string; 
} & React.ComponentProps<'input'>

export function DeafultInput({type, id, labelText, ...rest}: DeafultInputProps) {

    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id}>
                {labelText && <label htmlFor={id}>{labelText}</label>}
            </label>
            <input className={styles.input} type={type} id={id} {...rest} placeholder='Digite aqui' />
        </div>
    )
}