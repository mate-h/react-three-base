import { useFrame } from "@react-three/fiber"
import frag from "./box.frag"
export default () => {
  const time = { value: 0 }
  useFrame((state) => (time.value = state.clock.getElapsedTime()))
  return (
    <mesh>
      <boxGeometry />
      <shaderMaterial fragmentShader={frag} uniforms={{time}} />
    </mesh>
  )
}
