import React from 'react';

import {
  BarberContainer,
  Ball,
  EndCap,
  Cap,
  BarberWrap,
  Barber,
} from './styles';

export const Loading: React.FC = () => {
  return (
    <BarberContainer>
      <Ball />
      <EndCap />
      <Cap />
      <BarberWrap>
        <Barber />
      </BarberWrap>
      <Cap />
      <EndCap />
      <Ball />
    </BarberContainer>
  );
};

export default Loading;
