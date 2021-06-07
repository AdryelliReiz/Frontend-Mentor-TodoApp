import { ChangeEvent, KeyboardEvent, useContext, useState } from "react";
import styled from "styled-components"
import { TodoContext } from "../context/TodoContext";

export const InputTodo = () => {
    const {chores, setChores, isChecked} = useContext(TodoContext);

    const [valueInput, setValueInput] = useState('');

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setValueInput(event.target.value)
    }
    
    function createNewTodo(event:KeyboardEvent) {
        if (event.code === 'Enter') {
            if(valueInput === '') {
            return
            }
        
            const choreValue = {
                keyId: Math.floor(Math.random() * 10000),
                choreName: valueInput,
                isCompleted: isChecked,
            }
        
            setChores([choreValue,...chores])

            setValueInput('')
          
    }}
    return (
        <InputTodoStyled>
            <input 
                type="text" 
                placeholder="Create a new todo..." 
                autoFocus
                onKeyPress={createNewTodo}
                onChange={handleChangeInput}
                value={valueInput}
            />
        </InputTodoStyled>
    )
}

const InputTodoStyled = styled.div`
    width: 100%;
    height: 3.5rem;
    margin: 2rem 0;
    display: flex;
    flex-direction: row;

    @media(max-width: 600px) {
        height: 3rem;
        margin: 1.5rem 0;
    }

    input {
        width: 100%;
        height: 100%;
        padding: 1rem;
        background-color: var(--ColorSecondary);
        border-style: none;
        border-radius: 0.2rem;
        color: var(--ColorFont);
        font-size: 1rem;
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.75);

        ::placeholder {
            font: 18px "Josefin Sans", sans-serif;
        }
    }
`;