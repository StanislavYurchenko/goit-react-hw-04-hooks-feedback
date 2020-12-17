import styled from 'styled-components';

export const Container = styled.div`
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
