import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface TodoContextData {
    chores: IChoresProps[];
    setChores: Dispatch<SetStateAction<IChoresProps[]>>;
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>;
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
    const [isChecked, setIsChecked] = useState(false);


  
  return (
    <TodoContext.Provider value={{
        chores, 
        setChores,
        isChecked,
        setIsChecked,
    }} >
        {children}
    </TodoContext.Provider>
  )
}