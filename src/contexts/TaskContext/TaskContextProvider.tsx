import { useEffect, useReducer } from "react"
import { TaskContext } from "./TaskContext"
import { initialTaskState } from "./initialTaskState"
import { taskReducer } from "./TaskReducer"
import { TimerWorkerManager } from "../../workers/TimerWorkerManager"

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

    const [state, dispatch] = useReducer(taskReducer, initialTaskState)

    const worker = TimerWorkerManager.getInstance()

    worker.onmessage(e => {console.log(e.data)})

    useEffect(
        () => {
            if(!state.activeTask) {
                console.log('Worer terminado por falta de task');
                worker.terminate()
            }
            
            worker.postMessage(state)
        }, [state, worker]
    )

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
};




