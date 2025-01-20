import styled from 'styled-components'
import background from './img/background.jpg'
import { MainLayout } from './styles/Layouts.';
import Orb from './components/Orb/Orb';

function App() {
  return (
    <AppStyled background={background} className="App">
      <Orb></Orb>
      <MainLayout>
        <h1>Hello</h1>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.background});
  position: relative;
`;

export default App;
