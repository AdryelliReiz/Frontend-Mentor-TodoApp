import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface TodoContextData {
    chores: IChoresProps[];
    setChores: Dispatch<SetStateAction<IChoresProps[]>>;
}

interface TodoContextPRoviderData {
    children: ReactNode
}

interface IChoresProps {
    keyId: number;
    choreName: string | undefined;
    isCompleted: boolean;
}

export const TodoContext = createContext({} as TodoContextData);

export function TodoContextProvider({children} : TodoContextPRoviderData) {
const [chores, setChores] = useState<IChoresProps[]>([]);
  

  
  return (
    <TodoContext.Provider value={{
        chores, 
        setChores,
    }} >
        {children}
    </TodoContext.Provider>
  )
}