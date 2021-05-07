import React from 'react';

import { Space } from '@sharedComponents';

import strings from '@localization/home.locale';
import { greetUser } from '@utils/common';
import { smileyImage } from '@images';

import './Home.style.scss';

const Home = () => {
  return (
    <div className='home'>
      <>
        <h2>
          <Space>
            <>{greetUser()}</> <img className='home__smiley' src={smileyImage} alt=':)' />
          </Space>{' '}
          {strings.Title}
        </h2>
      </>
      <h3>
        {strings.Date}: {new Date().toDateString()}
      </h3>
    </div>
  );
};

export default Home;
