import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement
} from "react";

interface UserTypes {
  selected: string;
  setSelected: (id: string) => void;
}

const UserContext = createContext<UserTypes>({} as UserTypes);

type UserProviderProps = {
  children: ReactElement | ReactNode;
};
export const UserProvider = (props: UserProviderProps) => {
  const { children } = props;
  const [selected, setSelected] = useState<string>("");

  return (
    <UserContext.Provider
      value={{
        selected,
        setSelected
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
