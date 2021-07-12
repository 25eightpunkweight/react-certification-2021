import React from 'react';
import Styled from './ToggleButton.styled';

function ToggleButton(props) {
  return (
    <div data-testid="toggle">
      <Styled.CheckBoxWrapper>
        <Styled.CheckBox id="checkbox" type="checkbox" onChange={props.onChange} />
        <Styled.CheckBoxLabel htmlFor="checkbox" />
      </Styled.CheckBoxWrapper>
    </div>
  );
}

export default ToggleButton;
