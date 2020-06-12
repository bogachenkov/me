import React from 'react';
import Screen from '../../components/ui/Screen/index';
import Container from '../../components/ui/Container';
import WideFrame from '../../components/WideFrame/index';
import Presentation from '../../components/Presentation/index';

const Header = () => {
  return (
    <Screen id="header" bgColor="#f2f2f2">
      <Container centered flexEnd>
        <WideFrame>
          <Presentation />
        </WideFrame>
      </Container>
    </Screen>
  );
};

export default React.memo(Header);