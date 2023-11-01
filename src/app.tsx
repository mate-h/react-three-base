import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Scene from './scene'
import { Perf } from 'r3f-perf'
import { UniformParams, useParams } from './params'

function App() {
  const { debug } = useParams()
  return (
    <Canvas camera={{ position: [0, 1, -5] }}>
      {debug && <Perf position="top-left" minimal />}
      {debug && <gridHelper />}
      <UniformParams />
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export default App
