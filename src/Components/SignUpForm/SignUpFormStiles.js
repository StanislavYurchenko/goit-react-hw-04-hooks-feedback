import styled, { css } from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 255, 0.3);
  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Box = styled.div`
  margin: 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props =>
    props.radio &&
    css`
      align-items: baseline;
    `}
`;

export const InputText = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 255, 0.3);
  outline: none;
  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);
  transition: all 0.3s linear;
  padding: 5px;
  border-radius: 5px;

  :focus {
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
    border-bottom: 1px solid rgba(0, 0, 255, 1);
  }

  ::placeholder {
    font-family: sans-serif;
  }

  ${props =>
    props.name === 'message' &&
    css`
      width: 100%;
      height: 100px;
      resize: none;
    `}
`;

export const Checkbox = styled.input`
  display: none;
`;

export const Label = styled.label`
  font-size: 18px;
  text-decoration: none;
  color: black;
  position: relative;

  ${props =>
    props.checkbox &&
    css`
      padding-right: 30px;
      width: 100%;
      :before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 14px;
        height: 14px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 255, 0.3);
        box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);
        cursor: pointer;
      }
    `}

  ${props =>
    props.checked &&
    css`
      :after {
        content: '';
        display: block;
        position: absolute;
        top: 2px;
        right: 2px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: blue;
        border: 1px solid rgba(0, 0, 255, 0.3);
        box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);
        cursor: pointer;
      }
    `}
`;

export const Button = styled.button`
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 255, 0.3);
  outline: none;
  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);
  transition: all 0.3s linear;
  background-color: #fff;
  padding: 5px;
  width: 100%;
  font-size: 20px;
  cursor: pointer;

  :hover:not(:disabled) {
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
    border: 1px solid rgba(0, 0, 255, 1);
  }
  :disabled {
    cursor: default;
  }
`;
