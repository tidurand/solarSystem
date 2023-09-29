import { WheelEventHandler, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import './App.css'
import SolarSystem from './SolarSystem'

type UpdateProps = {
  controls: React.MutableRefObject<any>
}

function Update({ controls }: UpdateProps) {
  useFrame(() => {
    controls.current.update()
  })
  return null
}

function App() {
  const controls = useRef<any>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const moveSpeed = 5

  const handleWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    const delta = event.deltaY
    controls.current.object.position.z += delta * 0.01
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.key)
    switch (event.key) {
      case 'ArrowUp':
        setPosition((prev) => ({ x: prev.x, y: prev.y + moveSpeed }))
        break
      case 'ArrowDown':
        setPosition((prev) => ({ x: prev.x, y: prev.y - moveSpeed }))
        break
      case 'ArrowLeft':
        setPosition((prev) => ({ x: prev.x - moveSpeed, y: prev.y }))
        break
      case 'ArrowRight':
        setPosition((prev) => ({ x: prev.x + moveSpeed, y: prev.y }))
        break
      case ' ':
        setPosition(() => ({ x: 0, y: 0 }))
        break
      default:
        break
    }
  }

  return (
    <div id='canva-container'>
      <Canvas
        style={{ width: '100vw', height: '100vh' }}
        tabIndex={0}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
      >
        <Update controls={controls} />
        <OrbitControls ref={controls} />
        <PerspectiveCamera makeDefault position={[0, 0, 1000]} fov={10} />
        <SolarSystem position={position} />
      </Canvas>
    </div>
  )
}

export default App
