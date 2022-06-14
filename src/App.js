import './App.css';
import ConterHookContainer from './containers/ConterHookContainer';
import CounterAsycContainer from './containers/CounterAsycContainer';
import CounterContainer from './containers/CounterContainer';
import NewsItemAsycContainer from './containers/NewsItemAsycContainer';
import TodosContainer from './containers/TodosContainer';
import TodosHookContainer from './containers/TodosHookContainer';
function App() {
  return (
    <div className="App">
      <NewsItemAsycContainer />
      <hr />
     <CounterContainer />
     <ConterHookContainer />
     <CounterAsycContainer />
     <hr />
     <TodosContainer />
     <TodosHookContainer />
    </div>
  );
}

export default App;
