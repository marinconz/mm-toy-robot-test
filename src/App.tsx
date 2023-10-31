import React from 'react';
import {
  CommandLineInput,
  CommandLineLabel,
  CommandLineSubmit
} from './components/CommandInput/GenericComponents';

function App() {
  return (
    <div>
      <CommandLineLabel>Hola</CommandLineLabel>
      <CommandLineInput placeholder="Write your command" />
      <CommandLineSubmit>push</CommandLineSubmit>
    </div>
  );
}

export default App;
