import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/loading.json';

const  Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  }

  return <Lottie height='200px' options={defaultOptions} />;
}

export default Loading
