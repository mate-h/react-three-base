import { OrbitControls } from '@react-three/drei'
import Scene from './scene'
import { WebGPURenderer } from 'three/webgpu'
import { Canvas } from '@react-three/fiber'
import { UniformParams, useParams } from './params'
import { WebGLRenderer } from 'three'
import { useMemo } from 'react'
import { Perf } from 'r3f-perf'

type Canvas = HTMLCanvasElement | OffscreenCanvas

function App() {
  const { debug, webgpu } = useParams()
  const renderer = useMemo(() => {
    return (c: Canvas) => {
      if (webgpu) {
        return new WebGPURenderer({ canvas: c as HTMLCanvasElement })
      } else {
        return new WebGLRenderer({ canvas: c as HTMLCanvasElement })
      }
    }
  }, [webgpu])

  return (
    <Canvas
      gl={renderer}
      camera={{ position: [0, 1, -5] }}
      key={webgpu ? 'webgpu' : 'webgl'}
    >
      {debug && !webgpu && <Perf position="top-left" minimal />}
      {debug && <gridHelper />}
      <UniformParams />
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export default App
