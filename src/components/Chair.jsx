 /*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 chair.gltf --transform
Author: Francesco Coldesina (https://sketchfab.com/topfrank2013)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chair-b5ecdb6253a7454c916954bef6c10251
Title: Chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/chair-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-337.62, -369.78, -444.19]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials['default']} />
          <mesh geometry={nodes.Object_3.geometry} material={materials['default']} />
          <mesh geometry={nodes.Object_4.geometry} material={materials['default']} />
          <mesh geometry={nodes.Object_5.geometry} material={materials['default']} />
          <mesh geometry={nodes.Object_6.geometry} material={materials['default']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/chair-transformed.glb')
