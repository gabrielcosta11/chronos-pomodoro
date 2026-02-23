import { MoveDown, MoveUp, Trash2 } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { Heading } from '../../components/Heading';
import styles from './styles.module.css';
import type { TaskModel } from '../../models/TaskModel.ts';
import { sortTasks, type SortConfig } from '../../utils/sortTasks';
import { useEffect, useMemo, useState } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { DeafultButton } from '../../components/DeafultButton';
import { TaskActionsTypes } from '../../contexts/TaskContext/TaskActions';
import { showMessage } from '../../adapters/showMessage';


export function History() {

    const { state, dispatch } = useTaskContext()

    const [sortTasksOptions, setSortTasksOptions] = useState<SortConfig>({
        field: 'startDate',
        direction: 'desc'

    })

    const sortedTasks = useMemo(() => {
        return sortTasks({ tasks: state.tasks, direction: sortTasksOptions.direction, field: sortTasksOptions.field })
    }, [state.tasks, sortTasksOptions])


    const formatedDate = new Intl.DateTimeFormat('pt-BR', {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    })

    const typeMap = {
        shortBreakTime: 'Descanso curto',
        longBreakTime: 'Descanso longo',
        workTime: 'Foco',
    }

    useEffect(() => {
        document.title = 'Histórico - Chronos Pomodoro'
    }, [])

    function status(task: TaskModel) {
        if (state.activeTask && task.id === state.activeTask.id) return 'Em progresso...'
        if (task.completeDate) return 'Completa'
        if (task.interruptDate) return 'Interrompida'
        return 'Abadonada'
    }

    function handleSortTasks(payload: SortConfig) {
        setSortTasksOptions(payload);
    }

    function handleDeleteHistory() {
        showMessage.dismiss()
        showMessage.confirm('Você tem certeza que deseja apagar o histórico?', confirmation => {
            if(confirmation) {
                dispatch({ type: TaskActionsTypes.DELETE_TASKS })
            } 
        })
    }

    useEffect(() => {
        return () => {
            showMessage.dismiss()
        }
    }, [])


    return (
        <>
            <MainTemplate>

                <Container>
                    <Heading>
                        Histórico
                        {
                            state.tasks.length > 0
                            &&
                            <span className={styles.buttonContainer}>
                                <DeafultButton
                                    icon={<Trash2 />}
                                    color='red'
                                    title='Apagar Histórico'
                                    onClick={() => handleDeleteHistory()}
                                />
                            </span>
                        }
                    </Heading>
                </Container>

                <Container>
                    {
                        !(state.tasks.length > 0) ?
                            <p className={styles.noTasksMessage}>Você ainda não tem tarefas no histórico.</p>
                            :
                            <div className={styles.tableBox}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th className={styles.thSort}>
                                                <span>
                                                    Tarefa
                                                    <MoveDown onClick={() => handleSortTasks({ direction: 'asc', field: 'name' })} />
                                                    <MoveUp onClick={() => handleSortTasks({ direction: 'desc', field: 'name' })} />
                                                </span>
                                            </th>
                                            <th className={styles.thSort}>
                                                <span>
                                                    Duração
                                                    <MoveDown onClick={() => handleSortTasks({ direction: 'asc', field: 'duration' })} />
                                                    <MoveUp onClick={() => handleSortTasks({ direction: 'desc', field: 'duration' })} />
                                                </span>
                                            </th>
                                            <th className={styles.thSort}>
                                                <span>
                                                    Data
                                                    <MoveDown onClick={() => handleSortTasks({ direction: 'asc', field: 'startDate' })} />
                                                    <MoveUp onClick={() => handleSortTasks({ direction: 'desc', field: 'startDate' })} />
                                                </span>
                                            </th>
                                            <th>Status</th>
                                            <th>Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sortedTasks.slice(0, 100).map((task) => {
                                            const date = formatedDate.format(task.startDate).replace(',', '')

                                            return (
                                                <tr>
                                                    <td>{task.name}</td>
                                                    <td>{task.duration}min</td>
                                                    <td>{date}</td>
                                                    <td>{status(task)}</td>
                                                    <td>{typeMap[task.type]}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                    }

                </Container>
            </MainTemplate>
        </>
    )
}