/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @param direction -> horizontal, vertical
 * @param size -> 'xs', 'sm', 'md', 'lg', 'xl'
 */

const toElementsArray = (list) => {
  if (!list) {
    return [];
  }
  return Array.isArray(list) ? list : [list];
};

const getSpacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20
};

const Space = ({ direction = 'horizontal', size = 'sm', className = '', itemClassName = '', children }) => {
  const childNodes = toElementsArray(children);
  const itemsLength = childNodes.length;
  const marginDirection = direction === 'horizontal' ? 'marginRight' : 'marginBottom';

  if (itemsLength === 0) {
    return null;
  }
  return (
    <div className={cx('element-spacing', { [`${className}`]: className, 'd-flex-row': direction === 'horizontal', 'd-flex-col': direction === 'vertical' })}>
      {(childNodes || []).map((child, i) => (
        <div
          className={cx('element-spacing__item', { [`${itemClassName}`]: itemClassName })}
          key={i}
          style={childNodes.lastIndexOf(child) === itemsLength - 1 ? { [marginDirection]: 0 } : { [marginDirection]: getSpacing[size] || 'sm' }}
          item-index={childNodes.lastIndexOf(child)}>
          {child}
        </div>
      ))}
    </div>
  );
};

Space.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default memo(Space);
