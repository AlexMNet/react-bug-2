import GlobalStyles from './styles/Global';
import styled from 'styled-components';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <h1>Products</h1>
        <ProductList />
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  max-width: 100%;
  padding: 0 20px;
  width: 1024px;
`;
