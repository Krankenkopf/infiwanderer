import React, {FC, useState} from 'react'
import {useFrame, useThree} from "@react-three/fiber";
import {Triplet, useSphere} from "@react-three/cannon";
import {TextureLoader, Vector3} from "three";
import dots from "../../05-assets/3x3.png";

type TPlayerProps = {
    position: Triplet
}
export const Player: FC<TPlayerProps> = ({position}) => {
    const [initialized, setInitialized] = useState(0)
    const { camera } = useThree()
    const [ref] = useSphere(() => ({
        mass: 1000,
        args: [2],
        type: 'Dynamic',
        position: position,
    }))
    const texture = new TextureLoader().load(dots)
    console.log('player render')
    let cameraDistance = new Vector3(0, 25, 15)
    camera.rotateX(-0.18)
    //camera.rotateZ(Math.PI/4)
    useFrame(() => {
        if (initialized) {
            ref.current && camera.position.copy(ref.current.position)
            ref.current && console.log(ref.current.position)
        } else {
            setInitialized(initialized+1)
            let playerPosition = ref.current && ref.current.position
            let cameraPosition = playerPosition && playerPosition.add(cameraDistance)
            cameraPosition && camera.position.copy(cameraPosition)
        }
    })
    return (
        <mesh ref={ref}>
            <sphereBufferGeometry attach="geometry" args={[2]} />
            <meshStandardMaterial map={texture} attach="material"/>
        </mesh>
    )
}