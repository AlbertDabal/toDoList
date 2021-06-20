import { Input } from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { SetLogin } from 'api/FetchLogin';
import { useHistory, Link } from 'react-router-dom';
import { routes } from 'routes';

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

const WrapperLink = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkStyled = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  user-select: none;
  color: black;
`;

const Login = () => {
  const [error, setError] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await SetLogin(email, password);

    if (!res.data) {
      setError(res.toString());
    } else if (res.data) {
      history.push('/dashboard');
    }
  }
  return (
    <Wrapper>
      <Modal>
        <Heading>Login</Heading>
        <Paragraph style={{ color: 'green' }}>Email test1 password test</Paragraph>
        <Form onSubmit={handleSubmit}>
          <Input onChange={(e) => setEmail(e.target.value)} autoComplete="off" placeholder="Email" />
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            placeholder="Password"
          />
          {error ? <Paragraph style={{ color: 'red' }}>{error}</Paragraph> : <Paragraph>&nbsp;</Paragraph>}
          <Button type="submit">Login</Button>
        </Form>
        <WrapperLink>
          <Paragraph>Don&apos;t have an account?&nbsp;</Paragraph>
          <LinkStyled to={routes.register}>Sign Up</LinkStyled>
        </WrapperLink>
      </Modal>
    </Wrapper>
  );
};

export default Login;
