import './App.css';
import EcommerceProvider from './context/EcommerceProvider';
import Routes from './routes';


function App() {
  return (
    <EcommerceProvider>
      <Routes/>
    </EcommerceProvider>
  );
}

export default App;
