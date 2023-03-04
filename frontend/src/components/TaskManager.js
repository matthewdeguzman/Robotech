import TaskList from "./TaskList";
import {useState} from 'react'
const uuidv4 = require('uuid').v4;

const TaskManager = () => {
    const[tasks, setTasks] = useState([
        // {name: "Task #1", dueDate: "March 5th", priority: "10", duration: "3 hr", description: "This is the first task", number: "1"},
        // {name: "Second Task", dueDate: "March 6th", priority: "8", duration: "2 hr", description: "This is the second task", number: "2"},
        // {name: "Second Task", dueDate: "March 6th", priority: "8", duration: "2 hr", description: "This is the second task", number: "3"},
        // {name: "Second Task", dueDate: "March 6th", priority: "8", duration: "2 hr", description: "This is the second task", number: "4"},
        // {name: "Second Task", dueDate: "March 6th", priority: "8", duration: "2 hr", description: "This is the second task", number: "5"},
        // {name: "Second Task", dueDate: "March 6th", priority: "8", duration: "2 hr", description: "This is the second task", number: "6"},
        // {name: "Second Task", dueDate: "March 6th", priority: "8", duration: "2 hr", description: "This is the second task", number: "7"}
    ]);

    

    function addEvent() {
        
        setTasks([...tasks, {name: "New Task", dueDate: "March 5th", priority: "10", duration: "3 hr", description: "This is the first task", number: uuidv4()}]);
        console.log('fedhgfgdf')
    }

    const deleteEvent = (taskNum) => {
        const newTasks = tasks.filter( task => task.number !== taskNum);
        setTasks(newTasks);
    
    }

    
    return (
        <>
            <button className="add-event" onClick={addEvent}>Add Event</button>
        
            <div className="scroll-box">
                <TaskList tasks={tasks} deleteEvent={deleteEvent}/>
            </div>
            
        </>
    );
}
 
export default TaskManager;