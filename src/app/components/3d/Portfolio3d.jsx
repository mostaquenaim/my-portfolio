'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';

const portfolioItems = [
  { name: 'About', url: '/#about', icon: '/portfolio-logos/list.png' },
  { name: 'Work Experience', url: '/#work', icon: '/portfolio-logos/best-customer-experience.png' },
  { name: 'Education', url: '/#education', icon: '/portfolio-logos/education.png' },
  { name: 'Projects', url: '/#projects', icon: '/portfolio-logos/clipboard.png' },
  { name: 'Achievements', url: '/#achievements', icon: '/portfolio-logos/success.png' },
  { name: 'ECA', url: '/#eca', icon: '/portfolio-logos/charity.png' },
  { name: 'Contact', url: '/#contact', icon: '/portfolio-logos/contacts.png' },
];

const Portfolio3d = () => {
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

  const textures = useLoader(TextureLoader, portfolioItems.map(item => item.icon));

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {portfolioItems.map((item, i) => {
        const [hovered, setHovered] = useState(false);

        const phi = Math.acos(-1 + (2 * i) / portfolioItems.length);
        const theta = Math.sqrt(portfolioItems.length * Math.PI) * phi;
        const position = new THREE.Vector3().setFromSphericalCoords(2.5, phi, theta);

        return (
          <group
            key={item.name}
            position={position}
            onClick={() => window.open(item.url, '_blank')}
            onPointerOver={() => {
              document.body.style.cursor = 'pointer';
              setHovered(true);
            }}
            onPointerOut={() => {
              document.body.style.cursor = 'auto';
              setHovered(false);
            }}
          >
            {/* Icon image */}
            <mesh position={[0, 0, 0]} scale={hovered ? 1.5 : 1}>
              <planeGeometry args={[0.5, 0.5]} />
              <meshBasicMaterial
                map={textures[i]}
                transparent
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Text label */}
            <TextLabel text={item.name} color="#ffffff" />
          </group>
        );
      })}
    </group>
  );
};

const TextLabel = ({ text, color }) => {
  return (
    <Text
      position={[0, -0.5, 0]}
      fontSize={0.14}
      color={color}
      anchorX="center"
      anchorY="top"
    >
      {text}
    </Text>
  );
};

export default Portfolio3d;
