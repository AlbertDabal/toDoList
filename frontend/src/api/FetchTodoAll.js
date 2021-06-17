import axios from 'axios';

export const SetTodo = async () => {
  const token = sessionStorage.getItem('auth-token');
  const res = await axios
    .get('http://localhost:3000/todo', {
      headers: { 'auth-token': token },
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const AddTodoWork = async (name, description, type, project, piority, date) => {
  const token = sessionStorage.getItem('auth-token');
  const res = await axios
    .post(
      'http://localhost:3000/todo',
      {
        name,
        description,
        type,
        project,
        piority,
        date,
      },
      {
        headers: { 'auth-token': token },
      },
    )
    .catch((error) => {
      console.log(error);
    });

  console.log(res);

  return res;
};

export const AddTodo = async (name, description, type, piority, date) => {
  const token = sessionStorage.getItem('auth-token');
  const res = await axios
    .post(
      'http://localhost:3000/todo',
      {
        name,
        description,
        type,
        piority,
        date,
      },
      {
        headers: { 'auth-token': token },
      },
    )
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const DoneTodo = async (id) => {
  const token = sessionStorage.getItem('auth-token');
  const res = await axios
    .patch(
      `http://localhost:3000/todo/${id}`,
      {
        type: false,
      },
      {
        headers: { 'auth-token': token },
      },
    )
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const DelateTodo = async (id) => {
  const token = sessionStorage.getItem('auth-token');
  const res = await axios
    .delete(`http://localhost:3000/todo/${id}`, {
      headers: { 'auth-token': token },
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const EditTodo = async (id, name, description, piority) => {
  const token = sessionStorage.getItem('auth-token');
  const res = await axios
    .patch(
      `http://localhost:3000/todo/edit/${id}`,
      { name, description, piority },
      {
        headers: { 'auth-token': token },
      },
    )
    .catch((error) => {
      console.log(error);
    });
};

export const SetTodoToday = async (date) => {
  const token = sessionStorage.getItem('auth-token');
  const res = await axios
    .get(`http://localhost:3000/todo/today/${date}`, {
      headers: { 'auth-token': token },
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
