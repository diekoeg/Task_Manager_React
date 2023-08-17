import React from 'react';

import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import { TimerContextProvider } from '../TodoContext/TimerContext';

function App() {
  return(
    <TodoProvider>
      <TimerContextProvider>
        <AppUI />
      </TimerContextProvider>  
    </TodoProvider>
  )
}

export default App;
