import axios from 'axios';

export const SetTodo = async () => {
  const res = await axios
    .get('http://localhost:3000/todo', {
      headers: {
        'auth-token':
          // eslint-disable-next-line max-len
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM5ZmMxZjU4ZDU4ODQ5YTgxZDU4YWIiLCJpYXQiOjE2MjM4NTE5MzR9.RhixS8Gtmnt681_cVxRwCmnlacty_S7cukDx2QQcD68',
      },
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const AddTodoWork = async (name, description, type, project, piority, date) => {
  const res = await axios
    .post('http://localhost:3000/todo', {
      name,
      description,
      type,
      project,
      piority,
      date,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const AddTodo = async (name, description, type, piority, date) => {
  const res = await axios
    .post('http://localhost:3000/todo', {
      name,
      description,
      type,
      piority,
      date,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const DoneTodo = async (id) => {
  const res = await axios
    .patch(`http://localhost:3000/todo/${id}`, {
      type: false,
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const DelateTodo = async (id) => {
  const res = await axios
    .delete(`http://localhost:3000/todo/${id}`, {
      type: false,
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const EditTodo = async (id, name, description, piority) => {
  const res = await axios
    .patch(`http://localhost:3000/todo/edit/${id}`, { name, description, piority })
    .catch((error) => {
      console.log(error);
    });
};

export const SetTodoToday = async (date) => {
  const res = await axios
    .get(`http://localhost:3000/todo/today/${date}`, {
      headers: {
        // eslint-disable-next-line max-len
        'auth-token':
          // eslint-disable-next-line max-len
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM5ZmMxZjU4ZDU4ODQ5YTgxZDU4YWIiLCJpYXQiOjE2MjM4NTE5MzR9.RhixS8Gtmnt681_cVxRwCmnlacty_S7cukDx2QQcD68',
      },
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
