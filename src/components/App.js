
import '../styles/App.css';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoForm from './TodoForm';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <AddTodo/> */}
      <TodoForm/>
    </div>
  );
}

export default App;
