// * Aparentemente, todas as funções da API precisam ser, necessariamente, exportadas como sendo default. Porém, pode-se apenas uma exportação "default" por arquivo.
export default function getTasks(req, res) {
  let tasks = [
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
  ];

  return res.status(200).json(tasks);
}
