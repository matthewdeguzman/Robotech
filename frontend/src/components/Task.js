import { useState } from "react";


const Task = (props) => {
    var task = props.task;
    const [name, setName] = useState(task.name);
    const [dueDate, setDueDate] = useState(task.dueDate);
    const [priority, setPriority] = useState(task.priority);
    const [duration, setDuration] = useState(task.duration);
    const [description, setDescription] = useState(task.description);

    return ( 
        <form className="task">
            <label className="task-name"><input 
                style={{color: "#f1356d", fontSize: "30px", fontWeight: "bold"}}
                type="text"
                required
                value={name}
                onChange={(e) => {task.name = e.target.value; setName(e.target.value)}}/>
            </label>

            <div className="due-date"><b>Due Date:</b><input
                type="text"
                required
                value={dueDate}
                onChange={(e) => {task.dueDate = e.target.value; setDueDate(e.target.value)}}/></div>
            <div className="priority"><b>Priority: </b><input
                type="text"
                required
                value={priority}
                onChange={(e) => {task.priority = e.target.value; setPriority(e.target.value)}}/></div>
            <div className="duration"><b>Duration: </b><input
                type="text"
                required
                value={duration}
                onChange={(e) => {task.duration = e.target.value; setDuration(e.target.value)}}/></div>
            <div className="description"><b>Description:</b><input
                type="text"
                required
                value={description}
                onChange={(e) => {task.description = e.target.value; setDescription(e.target.value)}}/></div>
            <button className="delete" onClick={() => props.deleteEvent(task.number)}>Delete</button>
        </form>
    );
}
 
export default Task;