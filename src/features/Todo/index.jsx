import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

const todoListData = [
    {
        id: 1,
        name: "Chánh"
    },
    {
        id: 2,
        name: "Chánh 2"
    },
    {
        id: 3,
        name: "Chánh 3"
    }
]

function TodoFeature(props) {
    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={todoListData} />
        </div>
    );
}

export default TodoFeature;