import { CirclePlayIcon } from 'lucide-react';
import styles from './styles.module.css';
import { DeafultInput } from '../DeafultInput';
import { Cycles } from '../Cycles';
import { DeafultButton } from '../DeafultButton';
import React, { useRef } from 'react';
import type { TaskModel } from '../../Models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function Form() {

    const {state, setState} = useTaskContext()

    const taskNameInput = useRef<HTMLInputElement>(null)

    //ciclos
    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            alert('Digite o nome da tarefa')
            return
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType
        }

        const secondsRemaining = newTask.duration * 60 

        setState(
            prevState => {
                return {
                    ...prevState,
                    activeTask: newTask,
                    currentCycle: nextCycle,
                    secondsRemaining,
                    formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                    tasks: [...prevState.tasks, newTask]
                }
            }
        )

    }

    return (
        <>
            <form onSubmit={handleCreateNewTask} action="#" className={styles.form}>
                <DeafultInput
                    id='taskInput'
                    type='text'
                    labelText='TASK'
                    ref={taskNameInput}
                />

                <p>Próximo descanso é de 5min</p>

                <Cycles />

                <DeafultButton icon={<CirclePlayIcon />} color='green' />
            </form>
        </>
    )
}