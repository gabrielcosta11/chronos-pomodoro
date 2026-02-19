import { MoveDown, MoveUp } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { Heading } from '../Heading';
import styles from './styles.module.css';
import type { TaskModel } from '../../Models/TaskModel';
import { sortTasks, type SortTasksType } from '../../utils/sortTasks';
import { useState } from 'react';


export function History() {

    const { state } = useTaskContext()
    const [sortedTasksState, setSortedTasks] = useState<TaskModel[]>(sortTasks({tasks: state.tasks}))

    const formatedDate = new Intl.DateTimeFormat('pt-BR', {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    })

    function status(task: TaskModel) {
        if(state.activeTask && task.id === state.activeTask.id) return 'Em progresso...'
        if(task.completeDate) return 'Completa'
        if(task.interruptDate) return 'Interrompida'
        return 'Abadonada'
    }

    const typeMap = {
        shortBreakTime: 'Descanso curto',
        longBreakTime: 'Descanso longo',
        workTime: 'Foco',
    }


    return (
        <>
            <div className={styles.tableBox}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.thSort}>
                                <span>
                                    Tarefa
                                    <MoveDown onClick={() => setSortedTasks(sortTasks({tasks: sortedTasksState, direction: 'asc', field: 'name'}))}/>
                                    <MoveUp onClick={() => setSortedTasks(sortTasks({tasks: sortedTasksState, direction: 'desc', field: 'name'}))}/>
                                </span>
                            </th>
                            <th className={styles.thSort}>
                                <span>
                                    Duração
                                    <MoveDown onClick={() => setSortedTasks(sortTasks({tasks: sortedTasksState, direction: 'asc', field: 'duration'}))}/>
                                    <MoveUp onClick={() => setSortedTasks(sortTasks({tasks: sortedTasksState, direction: 'desc', field: 'duration'}))}/>
                                </span>
                            </th>
                            <th className={styles.thSort}>
                                <span>
                                    Data
                                    <MoveDown onClick={() => setSortedTasks(sortTasks({tasks: sortedTasksState, direction: 'asc', field: 'startDate'}))}/>
                                    <MoveUp onClick={() => setSortedTasks(sortTasks({tasks: sortedTasksState, direction: 'desc', field: 'startDate'}))}/>
                                </span>
                            </th>
                            <th>Status</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTasksState.map((task) => {
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
        </>
    )
}