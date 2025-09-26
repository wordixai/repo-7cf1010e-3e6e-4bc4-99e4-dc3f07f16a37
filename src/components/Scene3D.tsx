import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Center, useTexture, Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function GiftBox({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#8B5A7C" 
          roughness={0.1} 
          metalness={0.8}
        />
      </mesh>
      {/* Gift ribbon */}
      <mesh position={[position[0], position[1] + 0.1, position[2]]}>
        <boxGeometry args={[1.1, 0.1, 0.1]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
      <mesh position={[position[0], position[1] + 0.1, position[2]]}>
        <boxGeometry args={[0.1, 1.1, 0.1]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
    </Float>
  )
}

function Crown({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <group position={position}>
        {/* Crown base */}
        <mesh>
          <cylinderGeometry args={[0.8, 1, 0.3, 8]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.1} metalness={0.9} />
        </mesh>
        {/* Crown spikes */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <mesh key={i} position={[
            Math.cos((i / 8) * Math.PI * 2) * 0.9,
            0.5,
            Math.sin((i / 8) * Math.PI * 2) * 0.9
          ]}>
            <coneGeometry args={[0.1, 0.5, 4]} />
            <meshStandardMaterial color="#D4AF37" roughness={0.1} metalness={0.9} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function Scene3DContent() {
  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset="sunset" />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, 0, -20]} color="#D4AF37" intensity={0.5} />
      
      <Crown position={[0, 2, 0]} />
      <GiftBox position={[-3, 0, 0]} />
      <GiftBox position={[3, 0, 0]} />
      <GiftBox position={[0, 0, -3]} />
      
      <Center>
        <Text3D
          font="/fonts/playfair_display_regular.json"
          size={0.5}
          height={0.1}
          position={[0, -2, 0]}
        >
          EMPRESS
          <meshStandardMaterial color="#8B5A7C" />
        </Text3D>
      </Center>
    </>
  )
}

function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-empress-purple font-empress">Loading 3D Scene...</div>
    </div>
  )
}

export default function Scene3D() {
  return (
    <motion.div 
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene3DContent />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}