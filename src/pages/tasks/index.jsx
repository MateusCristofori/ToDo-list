import ListTasks from "@/list_tasks";
import { useState } from "react";
import Form from "../form";
import Search from "@/search";
import Filter from "@/filter/indext";

export async function getStaticProps() {
  const fetchData = await fetch("http://localhost:3000/api/tasks", {
    method: "GET",
  });
  const data = await fetchData.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}

export default function Tasks({ data }) {
  const [tasks, setTasks] = useState(data);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTask = (text, category) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const allTasks = [...tasks];
    const filteredTasks = allTasks.filter((task) =>
      task.id !== id ? task : null
    );
    setTasks(filteredTasks);
  };

  const completedTask = (id) => {
    const allTasks = [...tasks];
    allTasks.map((task) =>
      task.id === id ? (task.isCompleted = !task.isCompleted) : task
    );
    setTasks(allTasks);
  };
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <div className="todo-list">
        {tasks
          .filter((task) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? task.isCompleted
              : !task.isCompleted
          )
          .filter((task) =>
            task.text.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((task) => (
            <ListTasks
              key={task.id}
              task={task}
              removeTask={removeTask}
              completedTask={completedTask}
            />
          ))}
      </div>
      <Form addTask={addTask} />
    </div>
  );
}
