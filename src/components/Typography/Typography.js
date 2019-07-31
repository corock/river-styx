import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: ${props => (props.size === 'large' ? '2rem' : '1.5rem')};
  text-align: ${props => (props.align === 'right' ? 'right' : 'center')};
  margin: ${props => (props.size === 'large' ? '1rem' : '0rem')};
`;

const Typography = ({ children, align, size }) => {
  return (
    <Label align={align} size={size}>
      {children}
    </Label>
  );
};

export default Typography;
