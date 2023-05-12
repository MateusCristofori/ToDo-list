import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !category) {
      return;
    }
    addTask(title, category);
    setTitle("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default Form;
