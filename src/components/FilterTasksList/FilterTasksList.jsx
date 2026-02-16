import Task from "../FilterTask/FilterTask";

const TasksList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task data={task} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
