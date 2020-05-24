import React from 'react';

import { Container , Label} from './styles';

function Card() {
  return(
    < Container>
    <header>
      <Label color="#7179c1"/>
    </header >
    <p>
      Fazer a migração completa no servidor
    </p>
      <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt=""/>
    </Container>
  );
}

export default Card;