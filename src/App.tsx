import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stage } from '@react-three/drei';
import { Model } from './Model';

function App() {
  const ref = useRef();
  return (
    <div className="App" id="canvas">
      <Canvas
        style={{
          height: '100vh',
          width: '100vh',
          background: 'rgb(182 241 181)',
        }}
        dpr={[1, 2]}
        camera={{ fov: 50 }}
      >
        <Suspense fallback={null}>
          <Stage controls={ref} intensity={0.8} environment="city">
            false
            <Model />
            false
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
    </div>
  );
}

export default App;
