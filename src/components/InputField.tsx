import React, {useRef} from 'react';
import "./styles.css";

// Define the Props/properties interface
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return <form className='input' onSubmit={(e)=>{
            handleAdd(e);
            inputRef.current?.blur();
        }}>
        <input 
        ref={inputRef}
        type="input" 
        value = {todo}
        onChange={
            (e) => setTodo(e.target.value)}
        placeholder="Enter a task" className='input_box' ></input>
        <button className='input_submit'>Add</button>
    </form>
};

export default InputField;