import React from 'react';
import Styled from 'styled-components';

const StyledCheckbox = Styled.input`
  margin: 200px;
`;

const Checkbox: React.FC = () => {
  return <StyledCheckbox type="checkbox" />
};

export default Checkbox;
