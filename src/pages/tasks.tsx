import { AddTaskModal } from "@/components/module/tasks/addTaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types";

const Tasks = () => {
  const { data, isLoading } = useGetTasksQuery(undefined, {
    // pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  console.log({ data, isLoading });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-end items-center gap-4 mt-6">
        <h1 className="text-center mr-auto text-3xl">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-4">
        {!isLoading &&
          data.tasks.map((task: ITask) => {
            return <TaskCard task={task} key={task.id} />;
          })}
      </div>
    </div>
  );
};

export default Tasks;
