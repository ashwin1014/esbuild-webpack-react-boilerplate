import React from 'react';

import strings from '../../localization/home.locale';
import { greetUser } from '../../utils/common';

import './Home.style.scss';

const Home = () => {
  return (
    <div className='home'>
      <h2>
        {greetUser()}! <br /> {strings.Title}
      </h2>
      <h3>
        {strings.Date}: {new Date().toDateString()}
      </h3>
    </div>
  );
};

export default Home;
