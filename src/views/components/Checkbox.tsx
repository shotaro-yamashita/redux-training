import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
  margin: 200px;
`;

const Checkbox: React.FC = () => {
  return <StyledCheckbox type="checkbox" />
};

export default Checkbox;
