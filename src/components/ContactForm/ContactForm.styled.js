import styled from 'styled-components';

export const Phonebook = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding: 20px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Input = styled.input`
  margin-left: 20px;
  width: 275px;
`;
export const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
