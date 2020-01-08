import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  background-color: red;
`;

type Props = {
  value: string;
};

const Textarea: React.FC<Props> = (props) => {
  const { value } = props;
  return <StyledTextarea value={value} />
};

export default Textarea;
