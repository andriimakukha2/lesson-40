import React from 'react';
import './styles/App.scss';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import DataFetchComponent from './components/DataFetchComponent';

function App() {
  return (
      <div className="App">
        <h1>Controlled and Uncontrolled Forms</h1>
        <ControlledForm />
        <UncontrolledForm />
        <DataFetchComponent />
      </div>
  );
}

export default App;
