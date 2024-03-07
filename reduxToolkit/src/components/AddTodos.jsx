import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice.js';

function AddTodos() {
    const [input, setInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = async (e) => {
      e.preventDefault();
      if (input.trim() === '') {
        setErrorMessage("Todo can't be empty");
        return;
      }
        dispatch(addTodo(input));
        setInput('');
        setErrorMessage('');
    };

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    setErrorMessage('');
                }}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>
    );
}

export default AddTodos;
