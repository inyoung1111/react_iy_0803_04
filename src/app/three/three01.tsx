import { Cone, MeshTransmissionMaterial, OrbitControls, Sky, Sphere, Torus } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Three01 = () => {
  return (
    <>
    <div className='h-screen'>
        {/* Fiber의 핵심 컴포넌트로, 3D씬을 렌더링하는 공간을 제공 */}
        <Canvas>
            {/* 주변광 추가 */}
            <ambientLight intensity={10}/>
            {/* mesh : 3D객체의 기본 단위 (모양,재질) */}
            <mesh position={[-2,0,0]}>
                {/* 반지름,세그먼트 수,세그먼트 수  */}
                <sphereGeometry args={[1,32,32]}/>
                <meshStandardMaterial color= 'red'/>
            </mesh>

            {/* 
                drei 사용
                -mesh 래퍼가 필요가 옶음 (각 컴포넌트가 이미 mesh를 포함)
                - geometry, material 자동으로 생성
               */}
               <Sphere position={[-4,0,0]} args={[1,8,8]}>
                <meshStandardMaterial color='red'/>
               </Sphere>
               <Cone position={[2,0,0]} args={[1,2,32]}>
                <meshStandardMaterial color='green'/>
               </Cone>
               {/* <Box position={[0,0,0]} args={[1,1,1]}>
                <meshStandardMaterial color='orange'/>
               </Box> */}
               <Torus position={[0,0,-4]} args={[]}>
                <MeshTransmissionMaterial transparent={true} opacity={0.8}/>
               </Torus>
                {/* 카메라 조작 컨포넌트 */}
               <OrbitControls/>
                {/* 실시간 하늘과 태양 위치 반영하는 배경 */}
               <Sky sunPosition={[100,20,100]}/>

               

        </Canvas>

    </div>
    
    </>
  )
}

export default Three01