'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const TechSphere = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <RotatingSphere />
    </Canvas>
  );
};

const RotatingSphere = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  const techIcons = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'NestJS', color: '#E0234E' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Tailwind', color: '#38B2AC' },
    { name: 'Docker', color: '#2496ED' },
  ];

  return (
    <group ref={meshRef}>
      {techIcons.map((tech, i) => {
        const phi = Math.acos(-1 + (2 * i) / techIcons.length);
        const theta = Math.sqrt(techIcons.length * Math.PI) * phi;
        const position = new THREE.Vector3().setFromSphericalCoords(2.5, phi, theta);

        return (
          <group key={tech.name} position={position}>
            <mesh>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color={tech.color} />
            </mesh>
            <TextLabel text={tech.name} color={tech.color} />
          </group>
        );
      })}
    </group>
  );
};

const TextLabel = ({ text, color }) => {
  return (
    <Text
      position={[0, 0.4, 0]}
      fontSize={0.2}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

export default TechSphere;
