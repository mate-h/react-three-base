import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Box from './box'

function App() {
  return (
    <Canvas camera={{ position: [0, 1, -5] }}>
      <Box />
      <gridHelper />
      <OrbitControls />
    </Canvas>
  )
}

export default App
