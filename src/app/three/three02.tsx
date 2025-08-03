import { Plane, Text, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import { PI } from 'three/tsl'

const Light = () =>{
    const lightRef = useRef(null);
    
  
}
const Three02 = () => {
  return (
    <>
    <div className='h-screen'>
        <Canvas>
            {/* <ambientLight intensity={10}></ambientLight> */}
            <pointLight color={'#0000ff'}
                position={[0,1,0]}
                intensity={100}//강도
                distance={10}//거리
                decay={1}//감쇠
                castShadow
                receiveShadow

            />
            {/* 원뿔조명 */}
            {/* <spotLight
            position={[0,1,0]}
            angle={(Math.PI/180 *90)}
            intensity={10}
            penumbra={0}
            > */}
            {/*태양광 */}
            {/* <directionalLight
            position={[0,1,0]}
            intensity={5}/>
            </spotLight> */}


            <Text>
                <meshStandardMaterial color='red'/>
                HELLO</Text>
            {/* 평면 갹채 (바닥이나 벽) */}
            <Plane
            args={[5,5]} 
            rotation={[-Math.PI/180 * 90 ,0 ,0]}
            position={[0, -0.5, 0]}
            >
                
            <meshStandardMaterial color='green'/>
            </Plane>
        </Canvas>
    </div>
    </>
  )
}

export default Three02