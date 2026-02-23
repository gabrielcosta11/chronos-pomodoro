import type { TaskModel } from "../models/TaskModel"

export type SortConfig = {
    direction?: 'asc' | 'desc',
    field?: keyof TaskModel
}

export type SortTasksType = {
    tasks: TaskModel[]
} & SortConfig


export function sortTasks({
    tasks = [],
    direction='desc',
    field='startDate'
}: SortTasksType) {

    return (
        [...tasks].sort((a, b) => {
            const aValue = a[field]
            const bValue = b[field]

            if(aValue === null && bValue === null) return 0
            if(aValue === null) return 1
            if(bValue === null) return -1

            if(typeof aValue === "number" && typeof bValue === "number") {
                if(direction === 'desc') {
                    return bValue - aValue
                } 
                return aValue - bValue
            }

            if(typeof aValue === "string" && typeof bValue === "string") {
                if(direction === 'desc') {
                    return bValue.localeCompare(aValue)
                } 
                return aValue.localeCompare(bValue)
            }

            return 0
        })
    )
}