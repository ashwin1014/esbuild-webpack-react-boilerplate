import React from 'react';

import { Head } from '@sharedComponents';
import strings from '@localization/settings.locale';

import './Settings.style.scss';

const Settings = () => {
  return (
    <>
      <Head>
        <title>{strings.Title}</title>
      </Head>
      <div className='settings'>
        <h1>{strings.Title}</h1>
        <p className='text-center'>{strings.Message}</p>
      </div>
    </>
  );
};

export default Settings;
