"use client";
import { createContext, useReducer } from "react";

interface InitailState {
  user: {
    name: string;
    email: string;
    isLoggedIn: boolean;
  };
  cart: {
    count: number;
  };
}
interface UserPayload {
  name: string;
  email: string;
  isLoggedIn: boolean;
}
interface CartPayload {
  count: number;
  itemName: string;
}

type Action = { type: "LOGIN"; payload: UserPayload } | { type: "LOGOUT" };

const initialState: InitailState = {
  user: {
    name: "",
    email: "",
    isLoggedIn: false,
  },
  cart: {
    count: 0,
  },
};

const UserContext = createContext<{ state: InitailState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

const userReducer = (state: InitailState, action: Action): InitailState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          isLoggedIn: action.payload.isLoggedIn,
        },
      };
    case "LOGOUT":
      return initialState;
    default:
      return initialState;
  }
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
export default UserContext;

export { UserContext, UserProvider };
