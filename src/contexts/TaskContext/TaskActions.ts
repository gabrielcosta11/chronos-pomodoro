import type { TaskModel } from "../../Models/TaskModel"
import type { TaskStateModel } from "../../Models/TaskStateModel"

export enum TaskActionsTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET_STATE = 'RESET_STATE',
    COUNT_DOWN = 'COUNT_DOWN',
    COMPLETE_TASK = 'COMPLETE_TASK',
    DELETE_TASKS = 'DELETE_TASKS',
    CHANGE_SETTINGS = 'CHANGE_SETTINGS'
}

export type TaskActionModel =
    {
        type: TaskActionsTypes.START_TASK,
        payload: TaskModel
    }
    |
    {
        type: TaskActionsTypes.COUNT_DOWN,
        payload: {secondsRemaining: number}
    }
    |
    {
        type: TaskActionsTypes.INTERRUPT_TASK
    }
    |
    {
        type: TaskActionsTypes.COMPLETE_TASK
    }
    |
    {
        type: TaskActionsTypes.RESET_STATE
    }
    |
    {
        type: TaskActionsTypes.DELETE_TASKS
    }
    |
    {
        type: TaskActionsTypes.CHANGE_SETTINGS
        payload: TaskStateModel['config']
    }

