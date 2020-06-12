import React from 'react';
import Screen from '../../components/ui/Screen/index';
import Container from '../../components/ui/Container';
import Thanks from '../../components/Thanks';

const Footer:React.FC = () => {
  return (
    <Screen id="footer" bgColor="#121212">
      <Container centered>
        <Thanks />
      </Container>
    </Screen>
  );
};

export default React.memo(Footer);