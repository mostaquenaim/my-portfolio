'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';

const techIcons = [
  { name: 'React', color: '#ffffff', url: 'https://reactjs.org', image: '/logos/react.png' },
  { name: 'Next.js', color: '#ffffff', url: 'https://nextjs.org', image: '/logos/next.png' },
  { name: 'NestJS', color: '#ffffff', url: 'https://nestjs.com', image: '/logos/nest.png' },
  { name: 'PostgreSQL', color: '#ffffff', url: 'https://www.postgresql.org', image: '/logos/postgres.png' },
  { name: 'MongoDB', color: '#ffffff', url: 'https://www.mongodb.com', image: '/logos/mongo.png' },
  { name: 'TypeScript', color: '#ffffff', url: 'https://www.typescriptlang.org', image: '/logos/ts.png' },
  { name: 'Tailwind', color: '#ffffff', url: 'https://tailwindcss.com', image: '/logos/tailwind.png' },
  { name: 'Docker', color: '#ffffff', url: 'https://www.docker.com', image: '/logos/Docker.png' },
];

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

  const textures = useMemo(() => useLoader(TextureLoader, techIcons.map(icon => icon.image)), []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {techIcons.map((tech, i) => {
        const [hovered, setHovered] = useState(false);

        const phi = Math.acos(-1 + (2 * i) / techIcons.length);
        const theta = Math.sqrt(techIcons.length * Math.PI) * phi;
        const position = new THREE.Vector3().setFromSphericalCoords(2.5, phi, theta);

        return (
          <group
            key={tech.name}
            position={position}
            onClick={() => window.open(tech.url, '_blank')}
            onPointerOver={() => {
              document.body.style.cursor = 'pointer';
              setHovered(true);
            }}
            onPointerOut={() => {
              document.body.style.cursor = 'auto';
              setHovered(false);
            }}
          >
            <mesh scale={hovered ? 1.5 : 1}>
              <planeGeometry args={[0.5, 0.5]} />
              <meshBasicMaterial 
                map={textures[i]} 
                transparent={true}
                alphaTest={0.5}
                opacity={1}
                side={THREE.DoubleSide}
              />
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