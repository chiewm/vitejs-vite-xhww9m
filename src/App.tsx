import { useState } from 'react';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="App" id="canvas">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [10, 6, 10],
          fov: 50,
          material: { restitution: 10 },
        }}
      >
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[4, 64, 64]} />
          <meshLambertMaterial color="white" />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial color="#171717" />
        </mesh>

        <ambientLight intensity={0.1} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.5}
          intensity={1}
          castShadow
          penumbra={1}
          color="white"
        />
      </Canvas>
    </div>
  );
}

export default App;
