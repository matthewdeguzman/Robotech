import Task from './Task';
import {useState} from 'react'
const uuidv4 = require('uuid').v4;

const TaskManager = () => {
    const[tasks, setTasks] = useState([]);

    function addEvent() {
        const date = new Date();
        setTasks([...tasks, {name: "Enter name", dueDate: date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear(), priority: "10", duration: "01:00:00", description: "", number: uuidv4()}])
    }

    function addAll() {
        console.log(tasks)
    }
    return (
        <>
            <button className="add-event" onClick={addEvent}>Add Event</button>
            <div className="scroll-box">
                <div className="task-list">
                    {tasks && tasks.map((task) => ( <Task key={task.number} task={task}/>))}
                </div>
            </div>
            <button className="add-all" onClick={addAll}> Add All Events</button>
        </>
    );
}
 
export default TaskManager;