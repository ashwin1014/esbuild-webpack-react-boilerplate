import React from 'react';

import styled from 'styled-components';

import { Head } from '@sharedComponents';
import { notFound } from '@images';

const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const ImgWrapper = styled.div`
  height: calc(100vh - 250px);
  margin-bottom: 1rem;
`;

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404! Page not found :(</title>
      </Head>
      <Wrapper>
        <ImgWrapper>
          <Image src={notFound} alt='Route not found' />
        </ImgWrapper>
        <p className='text-center no-margin'>404!</p>
        <p className='text-center no-margin'>Sorry, the page you are looking for does not exist</p>
      </Wrapper>
    </>
  );
};

export default NotFound;
