import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components';
// https://coolors.co/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0

function App() {
  const Button = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px solid #f1faee;
      color: white;
      margin: 1.9rem 1rem;
      padding: 0.3rem 1rem;
      transition: all 0.25s ease-out;
      &:hover{
        transform: scale(1.05);
        color: #white;
        background: #83c5be;
        border: 2px solid transparent;
      }

    ${props => props.primary && css`
        background: white;
        color: #457b9d;
        border: 2px solid #2a9d8f;
        &:hover{
          background: white;
          color: 2a9d8f;
        }
    `} 
    ${props => props.secondary && css`
        background: #98c1d9;
        color: white;
        border: 2px solid #7400b8;
        &:hover{
          background: #bdb2ff;
        }
    `}  
    ${props => props.danger && css`
        background: #fb5607;
        color: white;
        border: 2px solid #e63946;
        &:hover{
          background: #ff006e;
        }
    `} `

  
  const Container = styled.div`
      text-align: center;
      background: #a8dadc;
      width: 100%;
      margin: auto;
      padding: 0;
  `

  return (
    <div className="App">
      <Container>
        <Button>View</Button>
        <Button primary>Add New</Button>
        <Button secondary>Print All</Button>
        <Button danger>Delete</Button>
      </Container>
    </div>
  )
}

export default App;
