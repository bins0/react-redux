import './App.css';
import ConterHookContainer from './containers/ConterHookContainer';
import CounterAsycContainer from './containers/CounterAsycContainer';
import CounterContainer from './containers/CounterContainer';
import CounterSagaContainer from './containers/CounterSagaContainer';
import NewsItemAsycContainer from './containers/NewsItemAsycContainer';
import NewsItemSagaContainer from './containers/NewsItemSagaContainer';
import TodosContainer from './containers/TodosContainer';
import TodosHookContainer from './containers/TodosHookContainer';
function App() {
  return (
    <div className="App">
      <NewsItemSagaContainer/>
      <hr/>
      <NewsItemAsycContainer />
      <hr />
     <CounterContainer />
     <ConterHookContainer />
     <CounterAsycContainer />
     <CounterSagaContainer />
     <hr />
     <TodosContainer />
     <TodosHookContainer />
    </div>
  );
}

export default App;
