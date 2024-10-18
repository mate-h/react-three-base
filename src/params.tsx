import { useControls } from 'leva'
import { useEffect } from 'react'
import { Uniform } from 'three'
import { uniform } from 'three/webgpu'

export const useParams = () => {
  return useControls({
    debug: { value: import.meta.env.DEV, label: 'Debug' },
    webgpu: { value: true, label: 'WebGPU' },
    value: { value: 0.5, min: 0, max: 1, label: 'Value' },
  })
}

export const uniformsGL = {
  value: new Uniform(0.5),
}

export const uniformsGPU = {
  value: uniform(0.5),
}

export const UniformParams = () => {
  const { value: valueParam } = useParams()
  useEffect(() => {
    uniformsGL.value.value = valueParam
    uniformsGPU.value.value = valueParam
  }, [valueParam])
  return null
}
