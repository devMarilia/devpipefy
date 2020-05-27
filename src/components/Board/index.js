import React, {useState} from 'react';
import produce from 'immer';
import BoardContex from './context';
import List from '../List';
import { loadLists } from '../../services/api';
import { Container } from './styles';

const data = loadLists();

function Board() {
  const [lists, setList] = useState(data);

  function move(fromList, toList, from, to) {
    console.log(fromList);
    setList(produce(lists, draft => {
      const dragget = draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragget);
    }));
  }
  return (
    <BoardContex.Provider value={{ lists, move }}>
      <Container >
        {lists.map((list, index)=> <List  key={list.title} index={index} data={list} />)}
      </Container >
    </BoardContex.Provider>
  );
}

export default Board;