import './app.css';
import styled, {ThemeProvider} from 'styled-components'
import Login from './components/login';


const Container = styled.div`
  background-color: gray;
  height:100%;
  width:100%;

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (

      <Container>
        
        <Login />

      </Container>
      
    
  );
}

export default App;
