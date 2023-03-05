import Task from './Task';
import {Planner, Day, PTask} from './PlannerRecommender';
import {useState} from 'react'
const uuidv4 = require('uuid').v4;

const TaskManager = () => {
    const[tasks, setTasks] = useState([]);

    

    function addEvent() {
        const date = new Date();
        setTasks([...tasks, {name: "Enter name", dueDate: date.getMonth() + 1 + "/" + date.getDate()+ "/" + date.getFullYear(), priority: "10", duration: "3", description: "", number: uuidv4()}])
    }

    function addAll() {
        console.log(tasks)
        const date = new Date();
        var planner = new Planner(new Day(date.getMonth() + 1, date.getDate(), date.getFullYear(), 9, 17));
        let parseDate = function (date) {
            let j = 0;
            var month, day, year;
            month = day = year = ""
            for(let i = 0; i < date.length; i++) {
                if(date[i] === "/") {
                    let res = parseInt(date.substring(j, i));
                    if (month === "") 
                    {
                        month = res;
                        j = i + 1;
                    }
                    else if (day === "") 
                    {
                        day = res;
                        j = i + 1;
                        break;
                    }
                }
            }
            var year = parseInt(date.substring(j, date.length))
            return {month, day, year};
        }
        tasks.forEach(task => {
            console.log(task.dueDate)
            let timeLeft = Math.ceil(((new Date(task.dueDate)).getTime() - date.getTime()) / (1000 * 3600))
            console.log(timeLeft)
            planner.addTask(new PTask(task.name, task.duration, task.duration / 8.0, task.priority, timeLeft))
            const parsedDate = parseDate(task.dueDate);
            console.log(parsedDate)
            planner.addDay(new Day(parsedDate.month, parsedDate.day, parsedDate.year, 9, 17));
        });

        planner.planTasks();
        planner.printPlanner();
    }

    const deleteEvent = (taskNum) => {
        const newTasks = tasks.filter( task => task.number !== taskNum);
        setTasks(newTasks);
    }
    
    return (
        <>
            <button className="add-event" onClick={addEvent}>Add Event</button>
        
            <div className="scroll-box">
                <div className="task-list">
                    {tasks && tasks.map((task) => ( <Task key={task.number} deleteEvent={deleteEvent} task={task}/>))}
                </div>
            <button className="add-all" onClick={addAll}> Add All Events</button>
            </div>
            
        </>
    );
}
 
export default TaskManager;