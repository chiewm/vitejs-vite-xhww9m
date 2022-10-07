import React, { useRef, useEffect, useState } from 'react';

// Declaration of the burst object
const burstObj = {
  className: 'BurstExample',
  radius: { 25: 75 },
  count: 10,
  top: 0,
  left: 0,
  duration: 2000,
  children: {
    shape: ['circle', 'polygon'],
    fill: ['#fff', '#eee', '#ddd', '#FC46AD', '#F64040'],
    angle: { 0: 10 },
    // rand string - generates random value for every child rand( min, max )
    degreeShift: 'rand(-360, 360)',
    // stagger string( start, step ) for every child
    delay: 'stagger(0, 25)',

    isSwirl: true, // Creates a swirl
    swirlSize: 10, // defines amplitude of the sine
    swirlFrequency: 'rand( 3, 6 )', // defines frequency of the sine
    pathScale: 'rand( .1, 1 )', // defines how much the total path length should be scaled
    direction: 'rand( 1, -1 )', // direction of the sine could be 1 or -1
  },
};

const buttonBurstsPool = [
  new Burst(burstObj),
  new Burst(burstObj),
  new Burst(burstObj),
  new Burst(burstObj),
  new Burst(burstObj),
  new Burst(burstObj),
];

let burstIndex = 0;

const Button = ({ ...props }) => {
  return (
    <button
      {...props}
      className="button"
      onClick={(e) => {
        buttonBurstsPool[burstIndex]
          .tune({ x: e.pageX, y: e.pageY })
          .generate()
          .replay();
        burstIndex =
          burstIndex >= buttonBurstsPool.length - 1 ? 0 : burstIndex + 1;
      }}
    />
  );
};

export default Button;
