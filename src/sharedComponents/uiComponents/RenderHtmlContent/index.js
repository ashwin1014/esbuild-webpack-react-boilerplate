/* eslint-disable react/no-danger */
import React, { memo } from 'react';

import PropTypes from 'prop-types';

const RenderHtmlContent = ({ content = '' }) => {
  const renderContent = (content || '').toString().trim();
  return (
    <>
      <span className='html-content' dangerouslySetInnerHTML={{ __html: renderContent }} />
    </>
  );
};

RenderHtmlContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.any
};

export default memo(RenderHtmlContent);
