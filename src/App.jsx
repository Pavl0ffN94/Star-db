//https:swapi.dev
import Header from './components/header/index';
import RandomPlanet from './components/random-planet/index';
import ItemList from './components/item-list/index';
import PersonDetails from './components/person-deteils/index';

function App() {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList />
        </div>
        <div className='col-md-6'>
          <PersonDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
