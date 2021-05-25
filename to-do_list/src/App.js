import './App.css';
import styled from 'styled-components';
import TaskAppMainContent from './components/TaskAppMainContent/TaskAppMainContent';

// https://coolors.co/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0

function App() {
 
  const Container = styled.div`
      width: 100vw;
  `

  return (
    <div className="App">
      <Container>
        <h1>Task App</h1>
        <TaskAppMainContent/>
      </Container>
    </div>
  )
}

export default App;
