import { CirclePlayIcon } from 'lucide-react';
import styles from './styles.module.css';
import { DeafultInput } from '../DeafultInput';
import { Cycles } from '../Cycles';
import { DeafultButton } from '../DeafultButton';


export function Form() {

    return (
        <>
            <form action="#" className={styles.form}>
                <DeafultInput id='taskInput' type='text' labelText='TASK'></DeafultInput>

                <p>Próximo descanso é de 5min</p>

                <Cycles/>

                <DeafultButton icon={<CirclePlayIcon/>} color='green'/>
            </form>
        </>
    )
}