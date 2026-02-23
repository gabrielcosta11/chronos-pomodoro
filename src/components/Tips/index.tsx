import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import type { TaskModel } from "../../models/TaskModel"


type TipsProps = {
    nextCycleType: TaskModel['type']
}


export function Tips({nextCycleType}: TipsProps) {

    const { state } = useTaskContext()

    const tipsActiveTask = {
        workTime: <span>Foque por <b>{state.config.workTime}min</b></span>,
        shortBreakTime: <span>Descanse por <b>{state.config.shortBreakTime}min</b></span>,
        longBreakTime: <span>Descanse por <b>{state.config.longBreakTime}min</b></span>
    }
    const tipsNoActiveTask = {
        workTime: <span>Próximo ciclo é de <b>{state.config.workTime}min</b></span>,
        shortBreakTime: <span>Próximo descanso é de <b>{state.config.shortBreakTime}min</b></span>,
        longBreakTime: <span>Próximo descanso é de <b>{state.config.longBreakTime}min</b></span>
    }

    return (
        <>
            {state.activeTask ? tipsActiveTask[state.activeTask.type] : tipsNoActiveTask[nextCycleType]}
        </>
    )

}