import axios from 'axios';

export const SetTodo = async () => {
  const res = await axios.get('http://localhost:3000/todo').catch((error) => {
    console.log(error);
  });

  return res;
};
