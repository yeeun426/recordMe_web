import React, {useCallback} from 'react';
import {List} from 'react-virtualized';
import TodoListItem from './TodoListItem';
import '../styles/TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className = "TodoList">
            {todos.map(todo => (
                <TodoListItem 
                    todo = {todo} 
                    key = {todo.id} 
                    onRemove = {onRemove}
                    onToggle = {onToggle}
                />
            ))}
        </div>
    );
};

export default React.memo(TodoList);