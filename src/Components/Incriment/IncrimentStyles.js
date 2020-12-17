import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 255, 0.3);
  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  flex-basis: 43%;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 255, 0.3);
  outline: none;
  box-shadow: 0 0 1px rgba(0, 0, 255, 0.3);
  transition: all 0.3s linear;
  background-color: #fff;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
`;
