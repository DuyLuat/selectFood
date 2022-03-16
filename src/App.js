import React, {Component} from 'react';
import FoodContainer from './containers/food-list';
import FoodDetailContainer from './containers/fooddetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Food List</h2>
          <FoodContainer />
          <hr />
          <FoodDetailContainer />

        </header>
      </div>
    )
    }

  }

export default App;
