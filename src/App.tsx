import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './hooks/types';
import { decrement, increment } from './redux/reducers/CounterSlice';
import './App.css';

function App() {
  const dispatch = useDispatch()<AppDispatch>;
  const count = useSelector((state: RootState) => state.counter.number);

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>Incremennt</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
