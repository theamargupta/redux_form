import styled from 'styled-components';

export const Styles = styled.div`
  h1 {
    text-align: center;
    color: #777;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 10rem auto;

    label {
      margin-top: 2rem;
    }
    input,
    select {
      font-size: 2rem;
    }
    .error {
      color: red;
      font-size: 1rem;
    }
  }
  button {
    background: #1997bf;
    padding: 1rem;
    color: white;
    margin-top: 2rem;
    border-radius: 0.5rem;
    font-size: 2rem;
  }
`;
