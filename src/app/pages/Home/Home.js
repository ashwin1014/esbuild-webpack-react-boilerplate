import React from 'react';

import { Space } from '@sharedComponents';

import strings from '@localization/home.locale';
import { greetUser } from '@utils/common';
import { smileyImage } from '@images';
import { FaBeer } from '@icons';

import './Home.style.scss';

const Home = () => (
  <div className='home'>
    <>
      <h1>
        <Space>
          <>{greetUser()}</> <img className='home__smiley' src={smileyImage} alt=':)' />
        </Space>
      </h1>
      <div className='d-flex align-items-center'>
        <h1>{strings.Title}</h1> <FaBeer />
      </div>
    </>
    <h3>
      {strings.Date}:{new Date().toDateString()}
    </h3>
  </div>
);

export default Home;
