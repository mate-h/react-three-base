import { useFrame } from '@react-three/fiber'
import frag from './box.frag'
import { useControls } from 'leva'
import { useEffect } from 'react'
import { Uniform } from 'three'

const Control = ({ speed }: { speed: Uniform }) => {
  const { speed: speedControl } = useControls({
    speed: { value: 0.5, min: 0, max: 1 },
  })
  useEffect(() => {
    speed.value = speedControl
  }, [speedControl])
  return null
}

export default () => {
  const time = new Uniform(0)
  const speed = new Uniform(0.5)

  useFrame((state) => {
    time.value = state.clock.getElapsedTime()
  })

  return (
    <mesh>
      <Control speed={speed} />
      <boxGeometry />
      <shaderMaterial fragmentShader={frag} uniforms={{ time, speed }} />
    </mesh>
  )
}
