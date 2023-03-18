export const AddTask = ({taskList, setTaskList, task, setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.id) {
            const date = new Date()
            const updatedTask = taskList.map(taskItem => taskItem.id === task.id ? {
                id: task.id,
                name: task.name,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            } : taskItem)
            setTaskList(updatedTask)
            setTask({})
        } else {
            const date = new Date()
            const newTask = {
                id: taskList.length + 1,
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newTask])
            setTask({})
        }
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ''}
                       onChange={(e) => setTask({...task, name: e.target.value})}
                       autoComplete="off" placeholder="add task" maxLength="25"/>
                <button type="submit">{task.id ? 'Обновить' : 'Добавить'}</button>
            </form>
        </section>
    )
}
