import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: ${props => (props.size === 'large' ? '24rem' : '16rem')};
  height: 2.5rem;
  font-size: 1rem;
  padding-left: 1rem;
`;

const NumberField = ({ size, placeholder, onValidNumber, onRemoveChar, onChange }) => {
  return (
    <Input type="text" size={size} placeholder={placeholder} onkeypress={onValidNumber} onkeyup={onRemoveChar} onChange={onChange} />
  );
};

export default NumberField;
