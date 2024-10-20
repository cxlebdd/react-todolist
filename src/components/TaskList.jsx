// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, editTask }) => {
    return (
        <ul className="mt-4">
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onDelete={deleteTask}
                    onEdit={editTask}
                />
            ))}
        </ul>
    );
};

export default TaskList;
