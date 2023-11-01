import { useControls } from 'leva'
import { useEffect } from 'react'
import { Uniform } from 'three'

export const useParams = () => {
  return useControls({
    debug: { value: import.meta.env.DEV, label: 'Debug' },
    value: { value: 0.5, min: 0, max: 1, label: 'Value' },
  })
}

export const uniforms = {
  value: new Uniform(0.5),
}

export const UniformParams = () => {
  const { value: valueParam } = useParams()
  useEffect(() => {
    uniforms.value.value = valueParam
  }, [valueParam])
  return null
}
