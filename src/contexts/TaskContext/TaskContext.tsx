import { createContext } from "react";
import type { TaskStateModel } from "../../Models/TaskStateModel"
import { initialTaskState } from "./initialTaskState";

type TaskContextProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
};

const initialContextValue = {
    state: initialTaskState,
    setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>({
    state: initialTaskState,
    setState: () => {}
});