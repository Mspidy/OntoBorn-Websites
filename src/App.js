

import './App.css';
import Choose from './ChooseUS';
import Testimonials from './coursel';
import Details from './details';
import Navbars from './header';
import Appps from './navbar';
import Slider from './slider';

function App() {
  return (
    <div className="container">
      <div className="container" style={{ marginBottom: "10px" }}>
        <Appps />
      </div>
      <Navbars />
      <Slider />
      <Details />
      <Testimonials />
      <Choose/>
    </div>
  );
}

export default App;
