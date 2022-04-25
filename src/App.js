import React from 'react';
import './App.css';
import Input from './components/input/Input';
import Item from './components/item/Item';

import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <h1>To-Do List Demo App</h1>
      <div className="app__container">
        <div className="app__todoContainer">
          {
            todoList.map( item => {
              return <Item name={item.item}
                    done={item.done}
                    id={item.id}
                    />
            })
          }
        </div>
        <Input/>
      </div>
    </div>
  );
}

export default App;
