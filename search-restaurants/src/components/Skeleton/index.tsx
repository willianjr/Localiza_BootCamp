import React from 'react'
import styled, { keyframes } from 'styled-components'

interface SkeletonProps {
  width:string
  height:string

}
const KeyFrameLoading = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const LoadingSkeleton = styled.div<SkeletonProps>`
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`


const Default = ({ width, height }:SkeletonProps) => <LoadingSkeleton width={width} height={height} />

export default Default
