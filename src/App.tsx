import './App.css';
import Header from './components/header/Header';
import NoteContainer from './components/body/NoteContainer';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <NoteContainer />
    </div>
  );
}

export default App;
