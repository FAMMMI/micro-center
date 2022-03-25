
import './App.css';
import Laptops from './components/Laptops/Laptops';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div className="App">
      <h1 className='header'>My-Cro Center</h1>
      <Laptops></Laptops>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
