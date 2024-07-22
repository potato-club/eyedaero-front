import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import ResponsiveWrapper from '../../components/ResponsiveWrapper';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <ResponsiveWrapper>
      <Container>
        <Header to={'/'}>
          <img src="/svg/Back.svg" />
          <span>로그인</span>
        </Header>
        <Content>
          <LoginForm />
        </Content>
      </Container>
    </ResponsiveWrapper>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Header = styled(Link)`
  padding: 0px 11px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 110px;
  background-color: #26cc9d;
  color: white;
  font-weight: 700;
  text-decoration: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0px 21px 44px;
`;