import { AddTaskModal } from "@/components/module/tasks/addTaskModal";
// import TaskCard from "@/components/module/tasks/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tasks = () => {
  // const tasks = [
  //   {
  //     id: "1",
  //     title: "Task 1",
  //     description: "This is a task",
  //     priority: "low",
  //   },
  //   {
  //     id: "2",
  //     title: "Task 2",
  //     description: "This is a task",
  //     priority: "medium",
  //   },
  //   {
  //     id: "3",
  //     title: "Task 3",
  //     description: "This is a task",
  //     priority: "high",
  //   },
  // ];

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-end items-center gap-4 mt-6">
        <h1 className="text-center mr-auto text-3xl">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-4">
        {/* {tasks.map((task) => {
          return <TaskCard tasks={task} key={task.id} />;
        })} */}
      </div>
    </div>
  );
};

export default Tasks;
