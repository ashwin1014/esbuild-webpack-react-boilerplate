import React from 'react';

import styled from 'styled-components';

import { Head } from '@sharedComponents';
import { SadIcon } from '@icons';

const Icon = styled(SadIcon)`
  height: 30px;
  width: 30px;
`;

const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404! Page not found :(</title>
      </Head>
      <Wrapper>
        <Icon />
        <p>Sorry, the page you are looking for does not exist</p>
      </Wrapper>
    </>
  );
};

export default NotFound;
