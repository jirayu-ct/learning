const url = "https://jsonplaceholder.typicode.com/todos";
const fetchTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

type Todo = {
  id: number,
  title: string,
  completed: boolean,
  userId: number
}


const AboutPage = async () => {

  const todos: Todo[] = await fetchTodos();
  console.log(todos);

  return (
    <div>
      AboutPage
      <ul>
        {
          todos.map((item, index) => {
            return <li key={index}>{ item.title }</li>
          })
        }
      </ul>
    </div>
  )
}
export default AboutPage