import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteStatus,
} from "@/redux/features/counter/task/taskSlice";
import { selectUsers } from "@/redux/features/counter/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ITask } from "@/types";
import { AiFillDelete } from "react-icons/ai";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  const assignedUser = users.find((user) => user.id === task.assignedTo);

  return (
    <div className="border mt-8 px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h3 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h3>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <AiFillDelete />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteStatus(task.id))}
          />
        </div>
      </div>
      <div>
        <p>Assigned To -{assignedUser ? assignedUser.name : "No one"}</p>
        <p className="text-gray-500">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
