import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Calc from './Components/Calc';
import ClientReturn from './Components/ClientReturn';


function App() {
  return (
    <div>
      <Header />
      <Calc />
      <ClientReturn />
    </div>
  );
}

export default App;
