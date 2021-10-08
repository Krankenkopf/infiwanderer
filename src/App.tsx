import React from 'react';
import './App.css';

import {Physics} from "@react-three/cannon";
import {Ground} from "./01-ui/01-ambient/Ground";
import {Player} from "./01-ui/02-entities/Player";
import {Canvas} from "@react-three/fiber";
import { Sky } from '@react-three/drei';
import {MouseController} from "./01-ui/MouseController";

const App = () => {


  return (
      <Canvas style={{height: '100vh'}}>
          <Sky sunPosition={[100, 20, 100]}/>
          <ambientLight  intensity={0.25}  name={'ambientLight'} />
          <pointLight castShadow={true} intensity={0.7} position={[100, 100, 100]} name={'pointLight'}/>
          <Physics gravity={[0, -10, 0]}>
              <Ground position={[0, 0, 0]} />
              <Player position={[0, 0, 3]} />
          </Physics>
          <MouseController />
      </Canvas>
  )
}

export default App;
