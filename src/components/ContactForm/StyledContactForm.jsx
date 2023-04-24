import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #f1f1f1;
  border: 2px solid black;
  border-radius: 8px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Text = styled.p`
  font-size: 24px;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  margin-top: 20px;
`;
export const Input = styled.input`
  height: 25px;
  border-radius: 2px;
`;
export const Submit = styled.button`
  margin-top: 20px;
  width: 120px;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 15px;
`;