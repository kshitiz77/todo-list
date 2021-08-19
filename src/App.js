import React, { useState } from 'react'
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [inputItem, setInputItem] = useState(" ");
  const [item, setItem] = useState([]);

  const handleInput = (event) => {
    setInputItem(event.target.value);
  }

  const addItems = () => {
    setItem((previousItem) => {
      return [...previousItem, inputItem];
    });
    setInputItem(" ");
  }

  const deleteItems = (id) => {
    setItem((previousItem) =>{
      return previousItem.filter((curtElement, index) =>{
        return index !== id;
      })
    })
  }

  return (
    <div className="app">
      <div className="app__container">
        <h1>To Do List</h1>
        <input type="text" placeholder="Add Items" onChange={handleInput} value={inputItem} />
        <button onClick={addItems}> + </button>
        <div className="app__orderList">
          <ol>

            {
              item.map((itemValue, index) => {
                return (

                  <ToDoList text={itemValue}
                    key={index}
                    id={index}
                    onSelect={deleteItems}
                  />
                )
              })
            }
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
