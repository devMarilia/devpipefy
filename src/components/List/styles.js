import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 300px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.5);

  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  h2 {
    font-weight: 500px;
    font-size: 17px;
    padding: 10px
  }
    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bdf;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
