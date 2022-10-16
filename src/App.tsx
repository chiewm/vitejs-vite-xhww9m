import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stage } from '@react-three/drei';
import { Model } from './Model';

function App() {
  const ref = useRef<any>();
  return (
    <div className="App" id="canvas">
      <div className="flex justify-center">
        <div className="text-sm">因果循環</div>
        <Canvas dpr={[1, 2]} camera={{ fov: 50 }}>
          <Suspense fallback={null}>
            <Stage controls={ref} intensity={0.8}>
              false
              <Model />
              false
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
