import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
`;

const Body = styled.body`
  margin: 0;
  padding: 0;
  background: rgba(100, 150, 200, 0.7); /* Sử dụng màu RGBA với giá trị alpha = 0.7 */
  height: 100vh;
  overflow: hidden;
`;


const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.05);
`;

const Heading = styled.h1` //tiêu đề tên đăng nhập
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
`;

const Form = styled.form` //Một form element để người dùng nhập thông tin đăng nhập.
  padding: 0 40px;
  box-sizing: border-box;
`;

const TextField = styled.div` //Một div container chứa các input fields trong form
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
  overflow: hidden;
`;

const Input = styled.input` //Input field cho username và password
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
`;

const Span = styled.span` //Một phần của input field, được sử dụng để tạo hiệu ứng dưới đường kẻ dưới của input field.
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #2691d9;
    transition: .5s;
  }
`;

const SubmitButton = styled.input` // Button để submit form
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #2691d9;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
`;

const SignupLink = styled.div` //Liên kết để chuyển đến trang đăng ký
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
`;

const SignupAnchor = styled.a`
  color: #2691d9;
  text-decoration: none;
`;

const DangNhap = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Thực hiện xử lý đăng nhập ở đây
    console.log('Đăng nhập với username:', username, 'và password:', password);
  };

  const handleSignupClick = (event) => {
    event.preventDefault();
    // Thực hiện hành động khi click vào "Signup" ở đây
    console.log('Chuyển đến trang đăng ký');
  };

  return (
    <Container>
      <Body>
        <Center>
          <Heading>Đăng nhập</Heading>
          <Form onSubmit={handleSubmit}>
            <TextField>
              <Input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Username"
                required
              />
              <Span></Span>
            </TextField>
            <TextField>
              <Input
                type="text"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
              <Span></Span>
            </TextField>
            <SubmitButton type="submit" value="Login" />
            <SignupLink>
              Not a member? <SignupAnchor href="#" onClick={handleSignupClick}>Signup</SignupAnchor>
            </SignupLink>
          </Form>
        </Center>
      </Body>
    </Container>
  );
};

export default DangNhap;
