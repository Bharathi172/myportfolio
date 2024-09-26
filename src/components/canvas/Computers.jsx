import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const computer = useGLTF('./desktop_pc/scene.gltf', true, (error) => {
    if (error) console.error('Error loading model:', error);
  });

  return (
    <mesh>
      {/* Ambient light for overall scene brightness */}
      <ambientLight intensity={0.7} />

      {/* Hemisphere light for subtle color variation */}
      <hemisphereLight intensity={0.5} groundColor="black" />

      {/* Key light */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Fill light */}
      <pointLight
        position={[-5, 5, 0]}
        intensity={1.5}
        distance={50}
      />

      {/* Rim light for edge definition */}
      <spotLight
        position={[0, 8, -10]}
        angle={0.6}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Additional lights for more coverage */}
      <pointLight
        position={[10, 0, 5]}
        intensity={1}
        distance={40}
      />

      <pointLight
        position={[-10, 0, -5]}
        intensity={1}
        distance={40}
      />

      <spotLight
        position={[0, -5, 5]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;