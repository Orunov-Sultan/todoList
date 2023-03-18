export const ShowTask = ({taskList, setTaskList}) => {
    const handleDelete = (id) => {
        const newTaskList = taskList.filter(taskItem => taskItem.id !== id)
        setTaskList(newTaskList)
    }

    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clearAll">Clear All</button>
            </div>
            <ul>
                {taskList.map((taskItem) => (
                    <li key={taskItem.id}>
                        <p>
                            <span className="name">{taskItem.name}</span>
                            <span className="time">{taskItem.time}</span>
                        </p>
                        <i className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(taskItem.id)} className="bi bi-trash"></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}
