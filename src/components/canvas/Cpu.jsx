import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Cpu = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");
  const cpu = useGLTF("/monitor_model/scene.gltf");
//   console.log("asdsad", computer);
  console.log("cpu", cpu);
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} />
      <primitive
        object={cpu.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -0, -0.0] : [0, -1.25, -0.5]}
        rotation={[-0.0, -0.0, -0.0]}
      />
    </mesh>
  );
};

const CpuCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //check is on mobile device
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); // sets to true when in small device
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [20, 3, 5], fov: isMobile ? 35 : 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Cpu isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CpuCanvas;
