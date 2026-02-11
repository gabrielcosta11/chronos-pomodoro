import { useContext } from 'react';
import type { HomeProps } from '../../pages/Home';
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';


export function TimerComponent() {

    const {state} = useTaskContext();

    return (
        <>
            <div className={styles.container}>
                {state.formattedSecondsRemaining}
            </div>
        </>
    )
}