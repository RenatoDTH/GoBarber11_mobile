import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, ButtonContainer } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonContainer>
      <Container {...rest}>
        <ButtonText>{children}</ButtonText>
      </Container>
    </ButtonContainer>
  );
};

export default Button;
