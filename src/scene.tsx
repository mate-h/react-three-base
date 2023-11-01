import { useFrame } from '@react-three/fiber'
import frag from './scene.frag'
import { Uniform } from 'three'
import { uniforms } from './params'

function useTime() {
  const time = new Uniform(0)
  useFrame((state) => {
    time.value = state.clock.getElapsedTime()
  })
  return time;
}

export default () => {
  const time = useTime()
  return (
    <mesh>
      <boxGeometry />
      <shaderMaterial fragmentShader={frag} uniforms={{ time, ...uniforms }} />
    </mesh>
  )
}
