const Task = (props) => {
    const tasks = props.tasks;
    return (
    <div className="task-list">
        {tasks.map((task) => ( 
            <div className="task" key={task.number}>
                <h2 className="name">{task.name}</h2>
                <div className="due-date"><b>Due Date:</b>{task.dueDate}</div>
                <div className="priority"><b>Priority: </b>{task.priority}</div>
                <div className="duration"><b>Duration: </b>{task.duration}</div>
                <div className="description"><b>Description:</b>{task.description}</div>
            </div>
        ))}
    </div>
    );
}
 
export default Task;