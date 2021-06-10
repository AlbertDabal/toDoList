import axios from 'axios';

export const SetTodo = async () => {
  const res = await axios.get('http://localhost:3000/todo').catch((error) => {
    console.log(error);
  });

  return res;
};

export const AddTodo = async (name, type, project, piority) => {
  const res = await axios
    .post('http://localhost:3000/todo', {
      name,
      type,
      project,
      piority,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
