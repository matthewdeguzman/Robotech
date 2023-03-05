const TaskComp = () => {
    return ( 
        <form className="task">
            <label className="name"><input 
                type="text"
                required/></label>
            <div className="due-date"><b>Due Date:</b><input
                type="text"
                required/></div>
            <div className="priority"><b>Priority: </b><input
                type="text"
                required/></div>
            <div className="duration"><b>Duration: </b><input
                type="text"
                required/></div>
            <div className="description"><b>Description:</b><input
                type="text"
                required/></div>
        </form>
    );
}
 
export default TaskComp;