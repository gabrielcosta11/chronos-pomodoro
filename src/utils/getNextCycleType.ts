import type { TaskModel } from "../Models/TaskModel";

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
    if (currentCycle === 8) return 'longBreakTime'
    if (currentCycle % 2 === 0) return 'shortBrakeTime'
    return 'workTime'
}