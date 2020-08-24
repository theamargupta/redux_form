import React from 'react';
import Loader from 'react-loader';

const circularLoader = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Loader
        // loaded={true}
        lines={13}
        length={20}
        width={10}
        radius={30}
        corners={1}
        rotate={0}
        direction={1}
        color='#999'
        speed={1}
        trail={60}
        shadow={false}
        hwaccel={false}
        className='spinner'
        zIndex={2e9}
        top='50%'
        left='50%'
        scale={1.0}
        loadedClassName='loadedContent'
      />
    </div>
  );
};

export default circularLoader;
