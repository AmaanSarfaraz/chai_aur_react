import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id: 1, text: "Hello"}]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: nanoid(), text: action.payload})
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id!== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
              todo.text = text;
            }
          },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload? {...todo, completed:!todo.completed} : todo)
        }
    }
})

export const { addTodo, removeTodo, updateTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer