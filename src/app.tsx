import { OrbitControls } from '@react-three/drei'
import Scene from './scene'
import { WebGPURenderer } from 'three/webgpu'
import { Canvas } from '@react-three/fiber'
import { UniformParams, useParams } from './params'
import { WebGLRenderer } from 'three'
// import { Perf } from 'r3f-perf'

type Canvas = HTMLCanvasElement | OffscreenCanvas
function App() {
  const { debug, webgpu } = useParams()
  const glRenderer = (c: Canvas) =>
    new WebGLRenderer({ canvas: c as HTMLCanvasElement })
  const webgpuRenderer = (c: Canvas) =>
    new WebGPURenderer({ canvas: c as HTMLCanvasElement })

  return (
    <Canvas
      gl={webgpu ? webgpuRenderer : glRenderer}
      camera={{ position: [0, 1, -5] }}
    >
      {/* {debug && <Perf position="top-left" minimal />} */}
      {debug && <gridHelper />}
      <UniformParams />
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export default App
