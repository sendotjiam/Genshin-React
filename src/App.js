import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Characters from './pages/Characters.jsx';
import data from './data/data.json';

function App() {
  return (
    <div className="bg-dark min-vh-100 text-white p-5">
      <div className="container">
        <h1 className='text-center display-6'>Genshin</h1>
        <div>
          <Characters data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
