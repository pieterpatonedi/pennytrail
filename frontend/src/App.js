import styled from 'styled-components'
import background from './img/background.jpg'
import { MainLayout } from './styles/Layouts.';
import Orb from './components/Orb/Orb';
import Navigation from './components/Navigation/Navigation';
import { useMemo, useState } from 'react';

function App() {
  const [active, setActive] = useState(1);
  const orbMemory = useMemo(() => {
    return <Orb />
  }, []);

  return (
    <AppStyled background={background} className="App">
      {orbMemory}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.background});
  position: relative;
  main{
    flex: 1;
    margin: 2rem 0;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 20px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
