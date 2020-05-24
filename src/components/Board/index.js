import React from 'react';
import List from '../List';
import { Container } from './styles';

function Board() {
  return (
    <Container >
      <List />
      <List />
      <List />
      <List />
    </Container >
  );
}

export default Board;