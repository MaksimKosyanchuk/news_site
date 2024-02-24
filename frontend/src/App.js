import Header from './models/Header/Header.js';
import StartScreen from './models/StartScreen/StartScreen.js';
import Footer from "./models/Footer/Footer.js";
import "./styles/common.css";
import 'react-quill/dist/quill.snow.css';

function App() {
  return (
    <div className="App">
      <Header />
      <StartScreen />
      <Footer />
    </div>
  )
}

export default App;
