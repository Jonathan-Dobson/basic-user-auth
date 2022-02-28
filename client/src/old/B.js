import React, {useReducer} from 'react';
import reducer from '../Reducer'
import AB from './ABProvider'

export default (props) => {
    console.log(props)
    
    return (
      <>
        <AB.Consumer>{value=><div>{value.name}</div>}</AB.Consumer>
      </>
    );
  }