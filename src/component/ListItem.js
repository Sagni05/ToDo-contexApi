import React, { useState } from "react";
// import data from "./data.json";

const ListItem = ({ todo, id, checkComplete, handleEditTodos }) => {
  const [onEdit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = (id) => {
    setEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };

  if (onEdit) {
    return (
      <li>
        <input
          type="checkbox"
          id="editValue"
          value={editValue}
          name="editValue"
          onChange={(e) => setEditValue(e.target.value.toLowerCase())}
        />
        <button onClick={() => handleSave(id)}>save</button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => checkComplete(id)}
          />
          {todo.name}
        </label>
        <button disabled={todo.complete} onClick={handleEdit}>
          Edit
        </button>
      </li>
    );
  }
};

export default ListItem;
