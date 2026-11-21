
"use client";

import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
import { Edges, Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Props = {
  theme?: "dark" | "light";
};

const nodes = [
  { name: "Frontend", x: -2.65, y: 1.5, color: "#35f5d0", icon: "◎" },
  { name: "Backend", x: 2.65, y: 1.5, color: "#48eaff", icon: "▱" },
  { name: "AWS Cloud", x: -2.65, y: -1.5, color: "#ffb76b", icon: "☁" },
  { name: "AI / RAG", x: 2.65, y: -1.5, color: "#c899ff", icon: "✧" },
];

function City({ dark }: { dark: boolean }) {
  const buildings = useMemo(() => {
    const result: { x: number; z: number; h: number }[] = [];

    for (let x = -8; x <= 8; x += 1.65) {
      for (let z = -8; z <= 8; z += 1.65) {
        if (Math.abs(x) < 3.8 && Math.abs(z) < 3.8) continue;

        const h = 0.6 + (Math.abs(x * 11 + z * 7) % 5) * 0.24;
        result.push({ x, z, h });
      }
    }
    return result;
  }, []);

  return (
    <group position={[0, -3.25, -5]}>
      <gridHelper
        args={[
          22,
          22,
          dark ? "#12bfc4" : "#68aab5",
          dark ? "#164253" : "#b1d5db",
        ]}
      />

      {buildings.map((b, i) => (
        <mesh key={i} position={[b.x, b.h / 2, b.z]}>
          <boxGeometry args={[0.95, b.h, 0.95]} />
          <meshStandardMaterial
            color={dark ? "#10283b" : "#cce6eb"}
            metalness={0.45}
            roughness={0.35}
          />
          <Edges color={dark ? "#197a92" : "#7bbac6"} />

          <mesh position={[0, 0, 0.481]}>
            <planeGeometry args={[0.45, 0.035]} />
            <meshBasicMaterial
              color={i % 4 === 0 ? "#ff8ba5" : "#45e8d4"}
            />
          </mesh>
        </mesh>
      ))}
    </group>
  );
}

function TechnologyNode({
  name,
  color,
  icon,
  x,
  y,
  dark,
}: {
  name: string;
  color: string;
  icon: string;
  x: number;
  y: number;
  dark: boolean;
}) {
  return (
    <group position={[x, y, 0]}>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.94, 0.94, 0.22, 6]} />
        <meshStandardMaterial
          color={dark ? "#112c40" : "#e6f7fa"}
          metalness={0.5}
          roughness={0.25}
          emissive={color}
          emissiveIntensity={dark ? 0.18 : 0.04}
        />
        <Edges color={color} />
      </mesh>

      <mesh position={[0, 0, 0.15]}>
        <boxGeometry args={[1.5, 0.75, 0.13]} />
        <meshStandardMaterial
          color={dark ? "#0a192a" : "#f0fbfc"}
          roughness={0.25}
          metalness={0.35}
        />
        <Edges color={color} />
      </mesh>

      <Text
        position={[0, 0.18, 0.23]}
        fontSize={0.25}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>

      <Text
        position={[0, -0.15, 0.23]}
        fontSize={0.17}
        color={dark ? "#ffffff" : "#163b4a"}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}

function Network({ dark }: { dark: boolean }) {
  const group = useRef<THREE.Group>(null);
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (group.current && !dragging.current) {
      group.current.rotation.y += delta * 0.15;
    }
  });

  const onDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    dragging.current = true;
    last.current = {
      x: e.nativeEvent.clientX,
      y: e.nativeEvent.clientY,
    };
    e.target.setPointerCapture(e.pointerId);
  };

  const onMove = (e: ThreeEvent<PointerEvent>) => {
    if (!dragging.current || !group.current) return;

    const dx = e.nativeEvent.clientX - last.current.x;
    const dy = e.nativeEvent.clientY - last.current.y;

    group.current.rotation.y += dx * 0.007;
    group.current.rotation.x = THREE.MathUtils.clamp(
      group.current.rotation.x + dy * 0.003,
      -0.3,
      0.3
    );

    last.current = {
      x: e.nativeEvent.clientX,
      y: e.nativeEvent.clientY,
    };
  };

  const onUp = (e: ThreeEvent<PointerEvent>) => {
    dragging.current = false;
    if (e.target.hasPointerCapture(e.pointerId)) {
      e.target.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <group
      ref={group}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={() => {
        dragging.current = false;
      }}
    >
      {/* Central glowing cube */}
      <mesh position={[0, 0, 0.35]}>
        <boxGeometry args={[1.55, 1.55, 1.55]} />
        <meshPhysicalMaterial
          color={dark ? "#15b8d0" : "#79dbe5"}
          metalness={0.3}
          roughness={0.12}
          transparent
          opacity={0.8}
          emissive="#18d9d1"
          emissiveIntensity={dark ? 0.35 : 0.08}
        />
        <Edges color="#63ffea" />
      </mesh>

      <Text
        position={[0, 0, 1.14]}
        fontSize={0.47}
        color="#ffffff"
      >
        {"</>"}
      </Text>

      {/* Layered cube platform */}
      <mesh position={[0, -1.03, 0.3]}>
        <boxGeometry args={[2.15, 0.2, 2.15]} />
        <meshStandardMaterial
          color="#10324b"
          emissive="#13e6d4"
          emissiveIntensity={0.3}
        />
        <Edges color="#4affdc" />
      </mesh>

      {/* Neon connections */}
      {nodes.map((node) => {
        const start = new THREE.Vector3(0, 0, 0);
        const end = new THREE.Vector3(node.x, node.y, 0);
        const direction = end.clone().sub(start);

        return (
          <group key={node.name}>
            <mesh
              position={start.clone().add(end).multiplyScalar(0.5)}
              quaternion={new THREE.Quaternion().setFromUnitVectors(
                new THREE.Vector3(0, 1, 0),
                direction.clone().normalize()
              )}
            >
              <cylinderGeometry
                args={[0.025, 0.025, direction.length(), 8]}
              />
              <meshBasicMaterial color={node.color} />
            </mesh>

            <TechnologyNode {...node} dark={dark} />
          </group>
        );
      })}

      {/* Transparent interaction surface */}
      <mesh position={[0, 0, -0.5]}>
        <planeGeometry args={[7.4, 4.8]} />
        <meshBasicMaterial
          transparent
          opacity={0}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default function Scene({ theme = "dark" }: Props) {
  const dark = theme === "dark";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 430,
        touchAction: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 1.3, 10.5], fov: 48 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.75]}
      >
        <ambientLight intensity={dark ? 1.2 : 1.8} />
        <directionalLight position={[4, 7, 6]} intensity={2.2} />
        <pointLight
          position={[-3, 3, 3]}
          intensity={dark ? 18 : 7}
          color="#23e9e0"
          distance={12}
        />

        <City dark={dark} />
        <Network dark={dark} />
      </Canvas>
    </div>
  );
}
