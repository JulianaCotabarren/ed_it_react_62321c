import './App.css';
import ProductsContainer from './components/ProductsContainer';
import EcommerceProvider from './context/EcommerceProvider';

function App() {
  return (
    <div className="App">
      <EcommerceProvider>
        <ProductsContainer/>
      </EcommerceProvider>
    </div>
  );
}

export default App;
