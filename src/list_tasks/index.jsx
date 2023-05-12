const ListTasks = ({ task, removeTask, completedTask }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{task.text}</p>
        <p className="category">({task.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completedTask(task.id)}>
          Completar tarefa
        </button>
        <button className="remove" onClick={() => removeTask(task.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default ListTasks;
