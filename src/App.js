import React from 'react';
import CLFButtonSVG from './components';

function App() {
  return (
      <div className="App">
        <div className={'clf-flex-center'}>
          <CLFButtonSVG
              display={'clf-flex-center'}
              name={'ClassFunc'}
              typeClass={'primary'}
              size={'default'}
          />
        </div>
      </div>
  );
}

export default App;
