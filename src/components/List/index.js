import React from 'react';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import { Container } from './styles';

function List({ data, index: listIndex } ) {
  return( 
    <Container done={data.done}>
      <header>
      <h1>{data.title}</h1>
        {data.creatable && (
          <button type="button">
          <MdAdd size={24} color="#FFF"/>
        </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
        <Card 
          key={card.id} 
          listIndex={listIndex}
          index={index} 
          data={card} 
        />
        ))}
      </ul>
    </Container>
  );
}

export default List;