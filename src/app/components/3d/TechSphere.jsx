'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';

const techIcons = [
  { name: 'React', image: '/logos/react.png' },
  { name: 'Next.js', image: '/logos/next.png' },
  { name: 'TypeScript', image: '/logos/ts.png' },
  { name: 'Tailwind', image: '/logos/tailwind.png' },
  { name: 'NestJS', image: '/logos/nest.png' },
  { name: 'Node.js', image: '/logos/node.png' },
  { name: 'PostgreSQL', image: '/logos/postgres.png' },
  { name: 'MongoDB', image: '/logos/mongo.png' },
  { name: 'Docker', image: '/logos/Docker.png' },
  { name: 'Git', image: '/logos/git.png' },
  { name: 'JWT', image: '/logos/jwt.png' },
  { name: 'Vercel', image: '/logos/vercel.jpg' },
];

const TechSphere = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.6} />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <Suspense fallback={null}>
        <RotatingSphere />
      </Suspense>
    </Canvas>
  );
};

const RotatingSphere = () => {
  const groupRef = useRef();
  const textures = useLoader(TextureLoader, techIcons.map((icon) => icon.image));

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {techIcons.map((tech, i) => {
        const phi = Math.acos(-1 + (2 * i) / techIcons.length);
        const theta = Math.sqrt(techIcons.length * Math.PI) * phi;
        const position = new THREE.Vector3().setFromSphericalCoords(2.5, phi, theta);

        return (
          <TechIcon key={tech.name} name={tech.name} texture={textures[i]} position={position} />
        );
      })}
    </group>
  );
};

const TechIcon = ({ name, texture, position }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
        setHovered(true);
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
        setHovered(false);
      }}
    >
      <mesh scale={hovered ? 1.4 : 1}>
        <planeGeometry args={[0.55, 0.55]} />
        <meshBasicMaterial map={texture} transparent alphaTest={0.5} side={THREE.DoubleSide} />
      </mesh>
      <Text position={[0, 0.42, 0]} fontSize={0.18} color="#e6e9ef" anchorX="center" anchorY="middle">
        {name}
      </Text>
    </group>
  );
};

export default TechSphere;
