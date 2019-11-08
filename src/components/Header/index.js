import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  LogoClick,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

function Header({ navigation, cartSize }) {
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

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);

// export default Header;
