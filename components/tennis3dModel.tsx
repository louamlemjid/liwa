'use client';

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Environment, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        width: "200px",
        background: "#eee",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
      }}>
        <div
          style={{
            height: "10px",
            width: `${progress}%`,
            background: "#0c6bf0ff", // your primary color
            transition: "width 0.3s ease"
          }}
        />
      </div>
      <p style={{ color: "#6482AD", marginTop: "8px", fontSize: "14px", textAlign: "center" }}>
        {progress.toFixed(0)} %
      </p>
    </Html>
  );
};

const RobotModel = () => {
  const group = useRef<THREE.Group>(null!);
  // ⚠️ important: preload disabled so loader shows up
  const { scene, animations } = useGLTF('/tennis.glb', true);
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01; // simple animation
    }
  });

  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} scale={0.1} />;
};

const Robot3DModel = () => {
  return (
    <div style={{ width: '100%', height: '600px', margin: 'auto' }}>
      <Canvas
        camera={{ position: [2.5, 0.9, 2.5], fov: 45 }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 0.8;
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <spotLight position={[5, 5, 0]} intensity={1.5} angle={0.3} penumbra={1} />
        <Environment preset="forest" />

        {/* Loader will show until the model is ready */}
        <Suspense fallback={<Loader />}>
          <RobotModel />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Robot3DModel;
