/* eslint-disable react/no-unknown-property */

import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/bee2.glb')
  const anm = useAnimations(animations, group);
  
  useEffect(() => {
    const action = anm.actions['_bee_hover_skeletal.1']; 
    if (action) {
      action.play();
    }
  }, [anm]);

  console.log(group)

  useEffect(() => {
    function handle(e) {
      if (group.current) {
        if(e.key === 'ArrowLeft'){
          group.current.position.x -=  0.2; 
        }
        if(e.key === 'ArrowRight'){
          group.current.position.x +=  0.2;
        }
        if(e.key === 'ArrowUp'){
          group.current.position.z -=  0.2;
        }
        if(e.key === 'ArrowDown'){
          group.current.position.z +=  0.2;
        }
      }
    }
    
    window.addEventListener('keydown', handle);
    return () => {
      window.removeEventListener('keydown', handle);
    };
  }, [anm]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.092}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_111" scale={0.01}>
                <group name="skeletal1_110">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.Material_0}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <group name="1645859359680_0_109" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bee2.glb')
