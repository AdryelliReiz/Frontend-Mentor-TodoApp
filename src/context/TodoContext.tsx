import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface TodoContextData {
    chores: IChoresProps[];
    setChores: Dispatch<SetStateAction<IChoresProps[]>>;
    filteredTodo: IChoresProps[];
    setFilteredTodo:Dispatch<SetStateAction<IChoresProps[]>>;
}

interface TodoContextProviderData {
    children: ReactNode
}

interface IChoresProps {
    keyId: number;
    choreName: string | undefined;
    isCompleted: boolean;
}

export const TodoContext = createContext({} as TodoContextData);

export function TodoContextProvider({children} : TodoContextProviderData) {
    const [chores, setChores] = useState<IChoresProps[]>([]);
    const [filteredTodo, setFilteredTodo] = useState<IChoresProps[]>([])


  return (
    <TodoContext.Provider value={{
        chores, 
        setChores,
        filteredTodo,
        setFilteredTodo
    }} >
        {children}
    </TodoContext.Provider>
  )
}