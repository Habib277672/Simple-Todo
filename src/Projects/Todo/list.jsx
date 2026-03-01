import { MdCheck, MdDeleteForever } from "react-icons/md";
export const List = ({
  data,
  checked,
  onhandleDeletetodo,
  onhandleCheckTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onhandleCheckTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onhandleDeletetodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
