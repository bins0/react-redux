import React from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../components/Counter'

const CounterSagaContainer = () => {//index.js에서 counterSagaReducer 가져옴
    const number = useSelector((state) => state.counterSagaReducer.number);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increaseAsyc()),[dispatch]);
    const onDecrease = useCallback(() => dispatch(decreaseAsyc()),[dispatch]);
  return <Counter number= {number} onIncrease= {onIncrease} onDecrease= {onDecrease}/>
};

export default CounterSagaContainer