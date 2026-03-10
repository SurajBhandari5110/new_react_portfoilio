// /components/TechSphere.tsx

import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const IMAGES = [
  "/images/react.png",
  "/images/angular.png",
  "/images/aws.png",
  "/images/mongo.png",
  "/images/mysql.png",
  "/images/laravel.png",
  "/images/wordpress.png",
  "/images/docker.png",
  "/images/restapi.png",

];

function fibonacciSphere(samples: number, radius: number) {
  const points = [];
  const offset = 2 / samples;
  const increment = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < samples; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;

    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;

    points.push([x * radius, y * radius, z * radius]);
  }

  return points;
}

function TechIcon({ texture, position }: any) {
  const ref = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.lookAt(camera.position);
  });

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[1.8, 1.8]} />
      <meshStandardMaterial
        map={texture}
        transparent
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
}

function SphereGroup() {
  const group = useRef<THREE.Group>(null);
  const textures = useLoader(THREE.TextureLoader, IMAGES);

  textures.forEach((t) => (t.colorSpace = THREE.SRGBColorSpace));

  const positions = useMemo(() => fibonacciSphere(20, 6), []);

  useFrame(({ mouse }) => {
    if (!group.current) return;

    group.current.rotation.y += 0.002;

    group.current.rotation.x = mouse.y * 0.4;
    group.current.rotation.y += mouse.x * 0.01;
  });

  return (
    <group ref={group}>
      {positions.map((pos, i) => (
        <TechIcon
          key={i}
          texture={textures[i % textures.length]}
          position={pos}
        />
      ))}
    </group>
  );
}

export default function TechSphere() {
  return (
    <div className="techstack">
      <h2>My Tech Stack</h2>

      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <color attach="background" args={["#0a0e17"]} />

        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, 5]} intensity={1} />

        <SphereGroup />
      </Canvas>
    </div>
  );
}