import React from 'react';
import { Button } from './style';

const FormButton = ({ children, ...otherProps }) => (
  <Button {...otherProps}>{children}</Button>
);

export default FormButton;
