import './App.scss';
import Routers from './Routing/Routers';
import Footer from './middleware/footer/Footer';
import Header from './middleware/header/Header';
function App() {

  const pathcheck = window.location.pathname;

  return (
    <div className='main-routing-section'>
      <div>
        {pathcheck === "/" ? <></> : <>
          {/* <Header /> */}
        </>}
      </div>
      <div>
        <Routers />
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
