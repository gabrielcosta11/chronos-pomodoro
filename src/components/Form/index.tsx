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
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function Form() {

    const { state, setState } = useTaskContext()

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

    function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log('interrupt');

        e.preventDefault()

        setState(
            prevState => {
                return {
                    ...prevState,
                    activeTask: null,
                    secondsRemaining: 0,
                    formattedSecondsRemaining: '00:00',
                    tasks: prevState.tasks.map(task => {
                        if (prevState.activeTask && prevState.activeTask.id === task.id) {
                            return { ...task, interruptDate: Date.now() }
                        }
                        return task
                    })
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
                    disabled={!!state.activeTask}
                />

                <p>Próximo descanso é de 5min</p>

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