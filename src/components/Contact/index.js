import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;


const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.input`
  display: block;
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.text_primary + 99};
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;
const Spacer = styled.div`
  height: 30px;
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ihu0s75', 'template_fauxfef', form.current,
        'kFCp7Q63M2u18LUyq',
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <Container id = "contact">
    <Form ref={form} onSubmit={sendEmail}>
      <Title>Contact</Title>
      <Label>Name</Label>
      <Input type="text" name="user_name" id="user_name" required />
      <Label>Email</Label>
      <Input type="email" name="user_email" id="user_email" required />
      <Label>Message</Label>
      <TextArea name="message" id="message" required />
      <SubmitButton type="submit" value="Send" />
      <Spacer />
    </Form>
    </Container>
  );
};

export default Contact;
