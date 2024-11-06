import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Count = () => {
    const count = useSelector((state) => state.count.count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {count}</h1> {/* count is a number */}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button  disabled={count <= 0} onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Count;
