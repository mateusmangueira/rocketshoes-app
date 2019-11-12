import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  LogoClick,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.lenght);

  return (
    <Wrapper>
      <Container>
        <LogoClick onPress={() => navigation.navigate('Home')}>
          <Logo />
        </LogoClick>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
