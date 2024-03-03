import './App.scss';
import Routers from './Routing/Routers';
import Footer from './middleware/footer/Footer';
import Header from './middleware/header/Header';
function App() {

  const pathcheck = window.location.pathname;

  return (
    <div className='main-routing-section'>
      <div className="inside-app-routing">
        <div className='routing-heading'>
          {/* {pathcheck === "/" ? <></> : <>
            <Header />
          </>} */}
        </div>
        <div className="routing-body">
          <Routers />
        </div>
        {/* <div className='routing-footer'>
          <Footer />
        </div> */}
      </div>

    </div>
  );
}

export default App;
