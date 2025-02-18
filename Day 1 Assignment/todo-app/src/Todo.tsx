import React, { useState } from "react";

type Todo = {
  task: string;
  description: string;
  status: boolean;
};

export default function Todo() {
  const [todoTask, setTask] = useState<Todo>({
    task: "",
    description: "",
    status: false,
  });

  const [todoList, setTodoList] = useState<Todo[]>([
    {
      task: "Fill Daily Timesheet",
      description: "fill the daily timesheet on Josh intranet website",
      status: false,
    },
    {
      task: "Daily Progress mail",
      description:
        "send a mail to manager regarding all the tasks performed during the day.",
      status: false,
    },
  ]);

  return (
    <div>
      <div>
        <h1 style={{ fontSize: "50px", textAlign: "center" }}>To-Do List</h1>
      </div>

      <div style={{ textAlign: "center" }}>
        {todoList.map((todo, index) => (
          <div
            key={index}
            style={{
              border: "solid black 1px",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>Task: {todo.task}</h3>
            <p>Description: {todo.description}</p>
            <p>
              Is Completed:{" "}
              {todo.status ? <span>&#9989;</span> : <span>&#10062;</span>}
            </p>
            <button
              onClick={() =>
                setTodoList(
                  todoList.map((item, ind) => {
                    if (ind === index) {
                      return { ...item, status: !todo.status };
                    } else {
                      return item;
                    }
                  })
                )
              }
            >
              {!todo.status ? `Mark as Done` : `Mark as Undone`}
            </button>
            <button
              style={{ margin: "10px" }}
              onClick={() =>
                setTodoList(
                  todoList.filter((item, ind) => {
                    return ind !== index;
                  })
                )
              }
            >
              Delete Task
            </button>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <label htmlFor="task">Task Name</label>
        <input
          onChange={(e) => {
            setTask({ ...todoTask, task: e.target.value });
          }}
          style={{ marginBottom: "10px" }}
          type="text"
          name="task"
        />
        <br style={{ margin: "10px" }} />
        <label htmlFor="description">Description</label>
        <input
          onChange={(e) => {
            setTask({ ...todoTask, description: e.target.value });
            console.log(todoTask);
          }}
          type="text"
          name="description"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setTodoList([...todoList, todoTask]);
          }}
          style={{ padding: "5px", marginTop: "10px", fontSize: "20px" }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
