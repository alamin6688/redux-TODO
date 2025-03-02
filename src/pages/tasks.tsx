import { AddTaskModal } from "@/components/module/tasks/addTaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  selectFilter,
  selectTasks,
  updateFilter,
} from "@/redux/features/counter/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filters = useAppSelector(selectFilter);

  const dispatch = useAppDispatch();

  console.log(tasks);
  console.log(filters);
  return (
    <div className="w-full mx-auto">
      <div className="flex justify-end items-center gap-4 mt-6">
        <h1 className="text-center mr-auto text-3xl">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-4">
        {tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />;
        })}
      </div>



    </div>
  );
};

export default Tasks;
