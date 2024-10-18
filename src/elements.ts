import { extend, MaterialNode } from '@react-three/fiber'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js';
import {
  MeshBasicNodeMaterial,
  MeshBasicMaterialParameters,
  MeshStandardMaterialParameters,
  MeshStandardNodeMaterial,
  NodeMaterial
} from 'three/webgpu'

extend({ MeshBasicNodeMaterial, MeshStandardNodeMaterial, NodeMaterial })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshBasicNodeMaterial: MaterialNode<MeshBasicNodeMaterial, [MeshBasicMaterialParameters]>;
      meshStandardNodeMaterial: MaterialNode<MeshStandardNodeMaterial, [MeshStandardMaterialParameters]>;
      nodeMaterial: MaterialNode<NodeMaterial, [NodeMaterialParameters]>;
      // pointLight: PointLightProps
    }
  }
}
