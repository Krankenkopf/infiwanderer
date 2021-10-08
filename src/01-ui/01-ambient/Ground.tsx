import React, {FC} from 'react'
import {Triplet, usePlane} from "@react-three/cannon"
import { TextureLoader, RepeatWrapping } from "three"
import grass from "../../05-assets/bgsnippet.png"

type TGroundProps = {
    position: Triplet
}
export const Ground: FC<TGroundProps> = (props) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI/2, 0, 0], ...props}))
    const texture = new TextureLoader().load(grass)
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(20, 20)
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
            <meshStandardMaterial map={texture} attach='material' />
        </mesh>
    )
}