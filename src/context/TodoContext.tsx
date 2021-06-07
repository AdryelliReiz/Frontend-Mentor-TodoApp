import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface TodoContextData {
    chores: IChoresProps[];
    setChores: Dispatch<SetStateAction<IChoresProps[]>>;
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>;
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
    const [isChecked, setIsChecked] = useState(false);
    const [filteredTodo, setFilteredTodo] = useState<IChoresProps[]>([])

    useEffect(() => {
        setFilteredTodo(chores);
    }, [chores])
  
  return (
    <TodoContext.Provider value={{
        chores, 
        setChores,
        isChecked,
        setIsChecked,
        filteredTodo,
        setFilteredTodo
    }} >
        {children}
    </TodoContext.Provider>
  )
}