import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpin = styled(animated.div)`
  border: 16px solid #f4ede8; /* Light grey */
  border-top: 16px solid #ff9000; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;
