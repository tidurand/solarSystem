import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

interface PlanetProps {
  name: string
  image: string
  position: [number, number, number]
  radius: number
  rotation: number
  sunRotation: number
}

const Planet = ({ image, position, radius, rotation, sunRotation }: PlanetProps) => {
  const texture = useTexture(image)
  const planetRef = useRef<any>()
  const rotationRef = useRef<any>()

  useFrame(() => {
    planetRef.current.rotation.y += rotation
    rotationRef.current.rotation.y += sunRotation
  })

  return (
    <mesh ref={rotationRef} position={[0, 0, 0]}>
      <mesh ref={planetRef} position={position}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </mesh>
  )
}

export default Planet
