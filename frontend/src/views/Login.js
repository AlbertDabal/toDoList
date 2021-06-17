import { Input } from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { SetLogin } from 'api/FetchLogin';
import { useHistory, Link } from 'react-router-dom';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(98, 98, 98, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  z-index: 999;
`;

const Modal = styled.div`
  display: flex;
  background-color: white;
  width: 30%;
  height: 50%;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const Login = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const res = await SetLogin(email, password);

    if (!res.data) {
      setError(res.toString());
    } else if (res.data) {
      history.push('/work');
    }
  }
  return (
    <Wrapper>
      <Modal>
        <Heading>Login</Heading>
        <Form onSubmit={handleSubmit}>
          <Input name="email" autoComplete="off" placeholder="Email" />
          <Input type="password" name="password" autoComplete="off" placeholder="Password" />
          {error && <Paragraph>{error}</Paragraph>}
          <Button type="submit">Login</Button>
        </Form>
        <Paragraph>Dont have an account? Sign Up</Paragraph>
      </Modal>
    </Wrapper>
  );
};

export default Login;
