import './App.scss';
import Routers from './Routing/Routers';
import Header from './middleware/header/Header';
function App() {

  const pathcheck = window.location.pathname;

  console.log(pathcheck, 'pathcheck')
  return (
    <div className='main-routing-section'>
      <div>

        {pathcheck === "/" ? <></> : <>
          <Header />

        </>}
      </div>
      <div>
        <Routers />
      </div>
    </div>
  );
}

export default App;
