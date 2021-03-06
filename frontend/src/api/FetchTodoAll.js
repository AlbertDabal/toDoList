import axios from 'axios';

export const SetTodo = async () => {
  const token = sessionStorage.getItem('auth-token');
  const res = await axios
    .get(`${process.env.REACT_APP_ADDRESS}/todo`, {
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
      `${process.env.REACT_APP_ADDRESS}/todo`,
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
      `${process.env.REACT_APP_ADDRESS}/todo`,
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

export const DoneTodo = async (id, status) => {
  const token = sessionStorage.getItem('auth-token');
  const res = await axios
    .patch(
      `${process.env.REACT_APP_ADDRESS}/${id}`,
      {
        status,
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
    .delete(`${process.env.REACT_APP_ADDRESS}/${id}`, {
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
      `${process.env.REACT_APP_ADDRESS}/todo/edit/${id}`,
      { name, description, piority },
      {
        headers: { 'auth-token': token },
      },
    )
    .catch((error) => {
      console.log(error);
    });

  return res;
};

export const SetTodoToday = async (date) => {
  const token = sessionStorage.getItem('auth-token');
  const res = await axios
    .get(`${process.env.REACT_APP_ADDRESS}/todo/today/${date}`, {
      headers: { 'auth-token': token },
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};
