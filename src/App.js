import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Checkbox } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Checkbox toggle/>
        <Dropdown text='File'>
          <Dropdown.Menu>
          <Dropdown.Item text='New' />
           <Dropdown.Item text='Open...' description='ctrl + o' />
           <Dropdown.Item text='Save as...' description='ctrl + s' />
           <Dropdown.Item text='Rename' description='ctrl + r' />
           <Dropdown.Item text='Make a copy' />
           <Dropdown.Item icon='folder' text='Move to folder' />
           <Dropdown.Item icon='trash' text='Move to trash' />
           <Dropdown.Divider />
           <Dropdown.Item text='Download As...' />
           <Dropdown.Item text='Publish To Web' />
           <Dropdown.Item text='E-mail Collaborators' />
         </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default App;
