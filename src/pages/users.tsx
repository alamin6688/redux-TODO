import { AddUserModal } from "@/components/module/tasks/addUserModal";
import { Button } from "@/components/ui/button";
import { selectFilter } from "@/redux/features/counter/task/taskSlice";
import {
  removeUser,
  selectUsers,
} from "@/redux/features/counter/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { AiFillDelete } from "react-icons/ai";

const Users = () => {
  const users = useAppSelector(selectUsers);
  const filters = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  console.log(users);
  console.log(filters);

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-between items-center gap-4 mt-6">
        <h1 className="text-center text-3xl">Users</h1>
        <AddUserModal />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between gap-10 items-center border border-green-200 p-8 rounded-lg"
          >
            <h2>{user.name}</h2>
            <Button
              onClick={() => dispatch(removeUser(user.id))}
              variant="link"
              className="p-0 text-red-500"
            >
              <AiFillDelete />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
