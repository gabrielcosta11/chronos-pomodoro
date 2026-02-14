import { CirclePlayIcon, StopCircleIcon } from 'lucide-react';
import styles from './styles.module.css';
import { DeafultInput } from '../DeafultInput';
import { Cycles } from '../Cycles';
import { DeafultButton } from '../DeafultButton';
import React, { useRef } from 'react';
import type { TaskModel } from '../../Models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionsTypes } from '../../contexts/TaskContext/TaskActions';
import { Tips } from '../Tips';

export function Form() {

    const { state, dispatch } = useTaskContext()

    const taskNameInput = useRef<HTMLInputElement>(null)

    //ciclos
    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log("newtask");


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


        dispatch({type: TaskActionsTypes.START_TASK, payload: newTask})

    }

    function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log('interrupt');

        e.preventDefault()

        dispatch({type: TaskActionsTypes.INTERRUPT_TASK})

    }



    return (
        <>
            <form onSubmit={handleCreateNewTask} action="#" className={styles.form}>
                <DeafultInput
                    id='taskInput'
                    type='text'
                    labelText='TASK'
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />

                <Tips nextCycleType={nextCycleType}/>

                {
                    state.currentCycle > 0 && (<Cycles />)
                }

                {
                    !state.activeTask ?
                        (
                            <DeafultButton
                                icon={<CirclePlayIcon />}
                                type='submit'
                                color='green'
                                aria-label='Iniciar nova tarefa'
                                title='Iniciar nova tarefa'
                                key='submit_button'
                            />
                        ) :
                        (
                            <DeafultButton
                                icon={<StopCircleIcon />}
                                type='button'
                                color='red'
                                aria-label='Encerrar tarefa'
                                title='Encerrar tarefa'
                                onClick={handleInterruptTask}
                                key='interrupt_button'
                            />
                        )
                }
            </form>
        </>
    )
}