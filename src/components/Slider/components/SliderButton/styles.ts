import styled from "styled-components";

import { IButtonStyled } from "./types";

export const ButtonContainer = styled('button')<IButtonStyled>(({buttonType, disabled}) => ({
  position: 'absolute',
  top: '50%',
  left: buttonType === "prev" ? '32px' : '',
  right: buttonType === "next" ? '32px' : '',
  border: 'none',
  paddingRight: buttonType === "prev" ? '20px' : '',
  paddingLeft: buttonType === "next" ? '20px' : '',
  transform: 'translate(0, -50%)',
  fontSize: '45px',
  color: disabled ? 'var(--opacity)' : 'var(--white)',
  background: 'none',
  zIndex: 1,
  cursor:  'pointer',
  transition: 'all 0.3s',
  ":hover": {
    transform: buttonType === "prev" ? 'translate(-20%, -50%)' : 'translate(20%, -50%)'
  },
  ":disabled": {
    transform: 'translate(0, -50%)',
    padding: 0,
    pointerEvents: 'none'
  }
}))

