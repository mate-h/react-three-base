import { useFrame } from '@react-three/fiber'
import frag from './box.frag'
import { params } from './pane'

export default () => {
  const time = { value: 0 }
  const speed = { value: params.speed }
  useFrame((state) => {
    time.value = state.clock.getElapsedTime()
    speed.value = params.speed
  })
  return (
    <mesh>
      <boxGeometry />
      <shaderMaterial fragmentShader={frag} uniforms={{ time, speed }} />
    </mesh>
  )
}
