/* eslint-disable react/no-unknown-property */

import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Bee from '../public/Bee';





const Scene = ()=>{

  return <>
  <directionalLight position={[0.0, 0.7, 2.4]} intensity={2.3}/>
      <ambientLight intensity={3.2}/>
      <Suspense fallback={null}>
        <OrbitControls/>
        <Bee position={[0, 0, 0]} rotation={[-0.5, 0, 0]} scale={.6}/> 
      </Suspense>
  </>
}



const App = () => {
  return (
    <div >
    <Canvas shadows dpr={[1, 2]} gl={{ alpha: false }} camera={{ position: [-1, 5, 5], fov: 45 }}>
    <color attach="background" args={['lightblue']} />
    <ambientLight />
    <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
    <Scene/>
    </Canvas>
    </div>
  )
      
}
export default App;
