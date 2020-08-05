import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <>
      <div>my component</div>
      <div>props.name: {name}</div>
      <div>props.children: {children}</div>
      <div>props.favoriteNumber: {favoriteNumber}</div>
    </>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
