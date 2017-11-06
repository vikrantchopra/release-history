import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddRelease from './AddRelease';

import Horizon from '@horizon/client';

import { Panel } from 'primereact/components/panel/Panel';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';

//const _horizon = new Horizon({host: 'localhost:8181'});
//const carCollection = _horizon('carList');

class App extends Component {

  constructor() {
    //console.log("Add Release Constructor");
    super();
    this.state = {
      car: { vin: '', brand: '', color: '' },
      carList: []
    };
    this.save = this.save.bind(this);
    //this.updateProperty = this.updateProperty.bind(this);
    //this.save = this.save.bind(this);

    //this.test = this.test.bind(this);


  }

  componentDidMount() {
    /*_horizon.connect();

    _horizon
      .onReady()
      .subscribe(() =>
        console.info('Connected to Horizon server'));

    _horizon
      .onDisconnected()
      .subscribe(() =>
        console.info('Disconnected from Horizon server'));

    carCollection
      .order('id')
      .watch()
      .subscribe(allItems =>
        this.setState({ carList: allItems }),
      error => console.error(error));

    */
  }

  updateProperty(property, value) {
    console.log("Property: " + property + " Value: " + value);

    let aCar = this.state.car;
    aCar[property] = value;
    this.setState({ car: aCar });
    //this.setState({property: value});
    //let _release = this.state.release;
    //_release[property] = value;
    //this.setState({ release: _release });
  }

  save(e) {
    e.preventDefault();
    /*const newCar = {
        Vin: this.state.car.vin,
        Brand: this.state.car.brand,
        Color: this.state.car.color
    }*/
    const newCar = this.state.car;
    //carCollection.store(newCar);
    this.setState({ car: { vin: '', brand: '', color: '' } });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AddRelease />
        {/*<div style={{ padding: '3px' }} className="ui-g-12">
          <div style={{ padding: '3px' }} className="ui-g-4">
            <AddRelease />
          </div>
          <div style={{ padding: '3px' }} className="ui-g-8">
            <ShowReleases />
          </div>
    </div>*/}

      </div>
    );
  }
}

export default App;
