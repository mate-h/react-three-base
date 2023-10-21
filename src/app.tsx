import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Box from './box'
import { Perf } from 'r3f-perf'

function App() {
  return (
    <Canvas camera={{ position: [0, 1, -5] }}>
      <Perf position="top-left" minimal />
      <Box />
      <gridHelper />
      <OrbitControls />
    </Canvas>
  )
}

export default App
