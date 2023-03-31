import styled from "styled-components";
import { IButtonStyled } from "./types";
import { isNextType, isPrevType } from "./utils";

export const ButtonStyled = styled('button')<IButtonStyled>(({buttonType, disabled}) => ({
  position: 'absolute',
  top: '50%',
  left: isPrevType({buttonType}) ? '32px' : '',
  right: isNextType({buttonType}) ? '32px' : '',
  border: 'none',
  paddingRight: isPrevType({buttonType}) ? '20px' : '',
  paddingLeft: isNextType({buttonType}) ? '20px' : '',
  transform: 'translate(0, -50%)',
  fontSize: '45px',
  color: disabled ? 'var(--opacity)' : 'var(--white)',
  background: 'none',
  zIndex: 1,
  cursor:  'pointer',
  transition: 'all 0.3s',
  ":hover": {
    transform: isPrevType({buttonType}) ? 'translate(-20%, -50%)' : 'translate(20%, -50%)'
  },
  ":disabled": {
    transform: 'translate(0, -50%)',
    padding: 0,
    pointerEvents: 'none'
  }
}))

