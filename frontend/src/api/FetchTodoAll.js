import axios from 'axios';

export const SetTodo = async () => {
  const res = await axios.get('http://localhost:3000/todo').catch((error) => {
    console.log(error);
  });

  return res;
};

export const AddTodoWork = async (name, type, project, piority, date) => {
  const res = await axios
    .post('http://localhost:3000/todo', {
      name,
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

export const AddTodo = async (name, type, piority, date) => {
  const res = await axios
    .post('http://localhost:3000/todo', {
      name,
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

export const EditTodo = async (id, name, piority) => {
  const res = await axios.patch(`http://localhost:3000/todo/edit/${id}`, { name, piority }).catch((error) => {
    console.log(error);
  });
};

export const SetTodoToday = async (date) => {
  const res = await axios.get(`http://localhost:3000/todo/today/${date}`).catch((error) => {
    console.log(error);
  });

  return res;
};
