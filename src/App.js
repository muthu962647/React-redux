import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';


function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawlMoney } = bindActionCreators(actionCreators,dispatch);

  return (
    <div className="App">
     <h1>{account}</h1>
     <button onClick={() => depositMoney(1000)}>deposit</button>
     <button onClick={() => withdrawlMoney(1000)}>withdrawl</button>
    </div>
  );
}

export default App;
