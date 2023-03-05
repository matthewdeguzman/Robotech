import TaskList from "./TaskList";
import {useState} from 'react'
const uuidv4 = require('uuid').v4;

const TaskManager = () => {
    const[tasks, setTasks] = useState([
        
    ]);

    function addEvent() {
        setTasks([...tasks, {name: "", dueDate: "", priority: "", duration: "", description: "", number: uuidv4()}])
    }

    function addAll() {
        console.log(tasks)
    }
    return (
        <>
            <button className="add-event" onClick={addEvent}>Add Event</button>
            <div className="scroll-box">
                {tasks && <TaskList tasks={tasks}/>}
            </div>
            <button className="add-all" onClick={addAll}> Add All Events</button>
        </>
    );
}
 
export default TaskManager;