import { useTexture } from '@react-three/drei'
import Planet from './components/Planet'

type Position = {
  x: number
  y: number
}

const SolarSystem = ({ position }: { position: Position }) => {
  const { x, y } = position
  const background = useTexture('./stars.jpg')

  return (
    <>
      <mesh position={[0 - x, 0 - y, 0]}>
        <boxGeometry args={[1000, 1000, 1000]} />
        <meshBasicMaterial map={background} side={1} />
      </mesh>
      <Planet
        name='Sun'
        position={[0 - x, 0 - y, 0]}
        image='./sun.jpg'
        radius={20}
        rotation={0}
        sunRotation={0}
      />
      <Planet
        name='Mercure'
        position={[6 + 20 - x, 0 - y, 0]}
        image='./mercury.jpg'
        radius={0.5}
        rotation={0.01}
        sunRotation={0.04}
      />
      <Planet
        name='Venus'
        position={[11 + 20 - x, 0 - y, 0]}
        image='./venus.jpg'
        radius={1.2}
        rotation={0.01}
        sunRotation={0.015}
      />
      <Planet
        name='Earth'
        position={[15 + 20 - x, 0 - y, 0]}
        image='./earth.jpg'
        radius={1.3}
        rotation={0.01}
        sunRotation={0.01}
      />
      <Planet
        name='Mars'
        position={[23 + 20 - x, 0 - y, 0]}
        image='./mars.jpg'
        radius={0.7}
        rotation={0.01}
        sunRotation={0.006}
      />
      <Planet
        name='Jupiter'
        position={[40 + 20 - x, 0 - y, 0]}
        image='./jupiter.jpg'
        radius={14.3}
        rotation={0.01}
        sunRotation={0.0001}
      />
      <Planet
        name='Saturne'
        position={[70 + 20 - x, 0 - y, 0]}
        image='./saturn.jpg'
        radius={12.1}
        rotation={0.01}
        sunRotation={0.000066}
      />
      <Planet
        name='Uranus'
        position={[150 + 20 - x, 0 - y, 0]}
        image='./uranus.jpg'
        radius={5.1}
        rotation={0.01}
        sunRotation={0.000033}
      />
      <Planet
        name='Neptune'
        position={[220 + 20 - x, 0 - y, 0]}
        image='./neptune.jpg'
        radius={5}
        rotation={0.01}
        sunRotation={0.00001}
      />
    </>
  )
}

export default SolarSystem
