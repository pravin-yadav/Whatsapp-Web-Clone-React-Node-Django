import Chat from './components/Chat';
import Contact from './components/Contact';
import './styles/index.scss';

function App() {
  return (
    <div className="container">
      <div className="contact--container">
        <Contact />
      </div>
      <div className="chat--container">
        <Chat />
      </div>
    </div>
  );
}

export default App;
