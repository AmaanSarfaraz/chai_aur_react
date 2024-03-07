import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Simpletodos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const [editableTodoId, setEditableTodoId] = useState(null);
    const [editedTodoText, setEditedTodoText] = useState('');

    const handleEdit = (todo) => {
        setEditableTodoId(todo.id);
        setEditedTodoText(todo.text);
    };

    const handleSave = () => {
        dispatch(updateTodo({ id: editableTodoId, text: editedTodoText }));
        setEditableTodoId(null);
    };

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {editableTodoId === todo.id ? (
                            <input
                                type="text"
                                value={editedTodoText}
                                onChange={(e) => setEditedTodoText(e.target.value)}
                                onBlur={handleSave}
                            />
                        ) : (
                            <button className="text-white  px-3 py-1 rounded">{todo.text}</button>
                        )}
                        <div>
                            {editableTodoId === todo.id ? (
                                <button className="text-white bg-green-500 px-3 py-1 rounded" onClick={handleSave}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </button>
                            ) : (
                                <button className="text-white bg-blue-500 px-3 py-1 rounded" onClick={() => handleEdit(todo)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3 3-3" />
                                    </svg>
                                </button>
                            )}
                            <button className="text-white bg-red-500 px-3 py-1 rounded" onClick={() => dispatch(removeTodo(todo.id))}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Simpletodos;
