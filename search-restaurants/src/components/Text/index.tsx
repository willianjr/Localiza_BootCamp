import React, { ReactNode } from 'react';
import BaseText from './Base';

interface TextProps {
  children:ReactNode
  size:string
  textStyle?:string

}

const Text = ({children, size, textStyle, ...others }:TextProps) => (
  <BaseText
      size={size}
      textStyle={textStyle}
      {...others}>
    {children}
  </BaseText>
)

export default Text
