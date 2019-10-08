import React, { Component } from 'react';
import './App.css';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { restClient, authClient } from 'ra-data-feathers';
import feathersClient from './feathersClient';
import { ItemList } from './items';
import { UserList } from './users';
import customRoutes from './customRoutes';
import Login from './Login';

const authClientOptions = {
  storageKey: 'feathers-jwt',
  authenticate: {strategy: 'local'}
};

const options = {id: '_id'};

class App extends Component {

  render() {
    return (
      <Admin
        title="XLedger"
        customRoutes={customRoutes}
        loginPage={Login}
        dataProvider={restClient(feathersClient, options)}
        authProvider={authClient(feathersClient, authClientOptions)}>

        <Resource name="items" list={ItemList}/>
        <Resource name="users" list={UserList}/>
        <Resource name="logs" list={ListGuesser}/>

      </Admin>
    );
  }
}

export default App;
