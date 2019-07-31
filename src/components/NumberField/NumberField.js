import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: ${props => (props.size === 'large' ? '24rem' : '16rem')};
  height: 2.5rem;
  font-size: 1rem;
  padding-left: 1rem;
`;

const NumberField = ({ type, size, placeholder, onChange }) => {
  return (
    <Input type={type} min="0" size={size} placeholder={placeholder} onChange={onChange} />
  );
};

export default NumberField;
