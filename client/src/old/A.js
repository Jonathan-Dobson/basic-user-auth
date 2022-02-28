import React, {useReducer} from 'react';
import reducer from '../Reducer'

export default () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </>
    );
  }