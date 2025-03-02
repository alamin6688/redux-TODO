import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "PmR_HQo4hq",
      name: "John Doe",
    },
    {
      id: "Hurt_HQo4hq",
      name: "Mezba",
    },
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return {
    id: nanoid(),
    ...userData,
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      // console.log(action);
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => {
  return state.user.users;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
