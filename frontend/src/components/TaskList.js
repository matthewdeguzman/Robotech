import { useState } from 'react';
import { TaskComp } from './TaskComp';
const TaskList = (props) => {
    const tasks = props.tasks;

    return (
        <div className="task-list">
            {tasks && tasks.map((task) => ( <TaskComp/>))}
        </div>
    );
}
 
export default TaskList;