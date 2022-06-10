import './App.css';
import ConterHookContainer from './containers/ConterHookContainer';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
function App() {
  return (
    <div className="App">
     <CounterContainer/>
     <ConterHookContainer/>
     <hr/>
     <TodosContainer />
    </div>
  );
}

export default App;
