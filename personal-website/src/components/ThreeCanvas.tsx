'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Scene({ isRevealed, onShapeClick, onShapeHover }: { 
  isRevealed: boolean; 
  onShapeClick: () => void;
  onShapeHover: (isHovering: boolean) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);
  const scaleRef = useRef(1);
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      if (!isRevealed) {
        meshRef.current.rotation.x += 0.003;
        meshRef.current.rotation.y += 0.004;
        
        // Animate the rainbow shader
        if (materialRef.current) {
          materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }
      } else {
        // Animate scale down when revealed
        scaleRef.current = Math.max(0, scaleRef.current - 0.02);
        meshRef.current.scale.setScalar(scaleRef.current);
      }
    }
  });

  const handlePointerOver = () => {
    setIsHovered(true);
    onShapeHover(true);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    onShapeHover(false);
  };

  const handleClick = () => {
    onShapeClick();
  };

  // Rainbow shader uniforms
  const uniforms = {
    uTime: { value: 0.0 }
  };

  return (
    <>
      {/* Ambient light for global fill */}
      <ambientLight intensity={0.6} />
      
      {/* Key light for shadows */}
      <directionalLight 
        position={[2, 4, 3]} 
        intensity={1.0}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-radius={2}
      />
      
      {/* Shadow catcher plane */}
      <mesh
        rotation-x={-Math.PI / 2}
        position-y={-1.2}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.6} />
      </mesh>
      
      {/* Main rainbow mesh */}
      <Icosahedron 
        ref={meshRef} 
        args={[1, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
        castShadow
      >
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={`
            varying vec3 vPos;
            void main() {
              vPos = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            }
          `}
          fragmentShader={`
            uniform float uTime;
            varying vec3 vPos;

            // quick HSV → RGB
            vec3 hsv2rgb(vec3 c){
              vec3 rgb = clamp( abs(mod(c.x*6.0 + vec3(0,4,2),6.0)-3.0)-1.0, 0.0, 1.0 );
              return c.z * mix( vec3(1.0), rgb, c.y);
            }

            void main() {
              float hue = fract(uTime*0.05 + length(vPos)*0.25);
              vec3 col = hsv2rgb(vec3(hue, 0.8, 1.0));
              
              // Add subtle glow
              float glow = 0.1 + 0.05 * sin(uTime * 2.0);
              col += glow * col;
              
              gl_FragColor = vec4(col, ${isRevealed ? 0 : 1});
            }
          `}
          transparent
        />
      </Icosahedron>
    </>
  );
}

export function ThreeCanvas({ isRevealed, onEnter }: { isRevealed: boolean; onEnter: () => void }) {
  const [isHoveringShape, setIsHoveringShape] = useState(false);

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        cursor: isHoveringShape ? 'pointer' : 'default',
        background: '#000000',
      }}
      shadows
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={45} />
      <Scene 
        isRevealed={isRevealed} 
        onShapeClick={onEnter}
        onShapeHover={setIsHoveringShape}
      />
    </Canvas>
  );
} 