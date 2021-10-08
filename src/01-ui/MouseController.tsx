import React, {FC} from 'react'
import {useFrame} from "@react-three/fiber";

type TMouseControllerProps = {
    
}
export const MouseController: FC<TMouseControllerProps> = () => {
    console.log('controller')
    useFrame(() => {

    })
    return (
        <mesh position={[0, 0, -10]}
              onPointerDown={(e) => {console.log(e.clientX + ' ' + e.clientY)}}>
            <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
            <meshStandardMaterial
                attach="material"
                color="orange"
                visible={false}
            />
        </mesh>
    )
}