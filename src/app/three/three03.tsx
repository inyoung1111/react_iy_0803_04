import { Box, Cone, Environment, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera, Sky, Sphere, Torus } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

// 기본위치 0,0,5 바라보는 위치 0.0.0
const Camera = () => {
    const cameraRef = useRef(null);

    // useFrame(()=>{
    //    if(
    //      cameraRef.current.rotation.y += 0.01
    //    )
    // })
    return(
        <PerspectiveCamera
        makeDefault // 기본카메라
        position={[0,2,5]}
        rotation={[(-Math.PI/180)*10, 0,0]}
        fov={75}  //시야각
        near={0.1} // 가까운 클리핑 거리
        far={1000} //먼 클리핑 거리

        />
    )
}
const Three03 = () => {
    
  return (
    <>
  <div className='h-screen'>
    <Canvas>

        <ambientLight intensity={10}/>
        
    </Canvas>
  </div>
    
    </>
  )
}

export default Three03