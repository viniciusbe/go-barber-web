import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

export const BarberContainer = styled.div`
  width: 84px;
  height: 306px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Ball = styled.div`
  height: 22px;
  width: 22px;
  margin-left: 31px;
  margin-right: 31px;
  border-radius: 100px;
  background-color: #f4ede8;
`;

export const EndCap = styled.div`
  width: 54px;
  height: 15px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #f4ede8;
`;

export const Cap = styled.div`
  width: 84px;
  height: 15px;
  background-color: #f4ede8;
`;

export const BarberWrap = styled.div`
  height: 172px;
  width: 54px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 15px;
  margin-right: 15px;
`;

const barberpole = keyframes`
  from {background-position: 0%;}
	to {background-position: 100%;}
`;

export const Barber = styled(animated.div)`
  height: 172px;
  width: 54px;
  position: inherit;
  background: #f4ede8;
  background: linear-gradient(
    -45deg,
    transparent 25%,
    #ff9000 25%,
    #ff9000 50%,
    transparent 50%,
    transparent 75%,
    #ff9000 75%
  );
  background-size: 27px 27px;
  animation: ${barberpole} 0.3s infinite linear;
`;
