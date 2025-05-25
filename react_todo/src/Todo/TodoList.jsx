import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  checked,
  onhandleDeleteTask,
  onhandleCheckedTask,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onhandleCheckedTask(data)}>
        <MdCheck className="icon" />
      </button>
      <button className="delete-btn" onClick={() => onhandleDeleteTask(data)}>
        <MdDeleteForever className="icon" />
      </button>
    </li>
  );
};
