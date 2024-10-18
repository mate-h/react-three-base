import { useFrame } from '@react-three/fiber'
import fragGlsl from './scene.glsl'
import fragWgsl from './scene.wgsl'
import { Uniform } from 'three'
import { uniformsGPU, uniformsGL, useParams } from './params'
import { vec3, wgslFn } from 'three/webgpu'
import { useMemo } from 'react'

function useTime() {
  const time = new Uniform(0)
  useFrame((state) => {
    time.value = state.clock.getElapsedTime()
  })
  return time
}

export default () => {
  const time = useTime()
  const { webgpu } = useParams()
  const hsv2rgb = useMemo(() => wgslFn(fragWgsl), [])
  return (
    <>
      <mesh>
        <boxGeometry />
        {webgpu && (
          <meshBasicNodeMaterial
            attach="material"
            colorNode={hsv2rgb(vec3(uniformsGPU.value, 1.0, 1.0))}
          />
        )}
        {!webgpu && (
          <shaderMaterial
            fragmentShader={fragGlsl}
            uniforms={{ time, ...uniformsGL }}
          />
        )}
      </mesh>
    </>
  )
}
