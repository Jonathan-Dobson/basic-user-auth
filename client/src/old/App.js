import React from 'react';
import A from './A'
import B from './B'
import AB from './ABProvider'

export default () => {
  return (
    <>
        <AB.Provider value = {{name:'Jon'}}>
            <B></B>    
        </AB.Provider>

        <AB.Provider value = {{name:'Dave'}}>
            <B></B>      
        </AB.Provider>

    </>
  );
}