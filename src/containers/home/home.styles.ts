import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';
import { Heading } from "@chakra-ui/react";

const bounce = keyframes`
  from, 0%, 50%, 100%, to {
    background-position: 0 50%;
  }

  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`

export const AnimatedGradientText = styled(Heading)`
  padding-bottom: 1rem;
  animation: ${bounce} 7s ease-in-out alternate infinite running;
  background: linear-gradient(45deg, #da22ff, #833ab4, #2193b0, #22c1c3);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  `;