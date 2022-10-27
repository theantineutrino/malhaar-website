import './App.css';
import Text from './components/Tickets/Text';
import Footer from './components/Footer';
import Form from './components/Tickets/Form';

function App() {
  return (
    <div className="App">
      <div className='set'>
        <Text />
        <Form/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
