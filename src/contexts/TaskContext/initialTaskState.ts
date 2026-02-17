import type { TaskStateModel } from '../../Models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 0.25,
        shortBreakTime: 0.05,
        longBreakTime: 0.15
    }
};
