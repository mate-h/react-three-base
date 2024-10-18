import { useFrame } from '@react-three/fiber'
import frag from './scene.frag'
import { Uniform } from 'three'
import { uniforms, useParams } from './params'
import { color, float } from 'three/webgpu'

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
  return (
    <>
      <mesh>
        <boxGeometry />
        {webgpu && (
          <meshStandardNodeMaterial
            attach="material"
            colorNode={color(1, 0, 0)}
            roughnessNode={float(0.1)}
          />
        )}
        {!webgpu && (
          <shaderMaterial
            fragmentShader={frag}
            uniforms={{ time, ...uniforms }}
          />
        )}
      </mesh>
    </>
  )
}
