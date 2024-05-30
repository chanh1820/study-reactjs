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
            <iframe src="https://hitachivantara-my.sharepoint.com/personal/thien_cao_hitachids_com/_layouts/15/Doc.aspx?sourcedoc={baacbed8-a6c7-4828-bc73-9a7a92d37d18}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
            <TodoList todoList={todoListData} />
        </div>
    );
}

export default TodoFeature;