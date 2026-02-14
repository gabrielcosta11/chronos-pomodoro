import { createContext } from "react";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./TaskActions";
import type { TaskStateModel } from "../../Models/TaskStateModel";

type TaskContextProps = {
    state: TaskStateModel,
    dispatch: React.Dispatch<TaskActionModel>
};

const initialContextValue = {
    state: initialTaskState,
    dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);