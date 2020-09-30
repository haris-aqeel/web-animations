import React, {useState} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import Wheel1 from './Wheel1'
import Wheel2 from './Wheel2'

import './App.css';

function App() {

  const [speed, setspeed] = useState(1); 

  const {ref, playState, getAnimation} = useWebAnimations({
    keyframes: {
      transform: ['translateX(-200px)']
    },
    timing: {
      iterations: Infinity,
      duration: 500,
      delay: 1000,
    }})

    const play = () => {
      getAnimation().play();
    };
  
    const pause = () => {
      getAnimation().pause();
    };

    const IncreaseSpeed = _ => {
      let currRate = getAnimation().playbackRate;
      setspeed(currRate*1.5)
      getAnimation().updatePlaybackRate(speed)
    }
    
    const DecreaseSpeed = _ => {
      let currRate = getAnimation().playbackRate;
      setspeed(currRate/1.5)
      getAnimation().updatePlaybackRate(speed)
    }

  return (
    <div className="sky">
      <button id='play' onClick={play}> Play </button>
      <button id='pause' onClick={pause}> Pause</button>
      <button id='pause' onClick={IncreaseSpeed}> Increase Speed</button>
      <button id='pause' onClick={DecreaseSpeed}> Decrease Speed</button>
      <div className='trees'>
      <img src='http://hmcaranimation.surge.sh/Imagesandsound/trees.png' alt='trees'/>
      </div>
      <div className='road' ref={ref}>
        <img src='http://hmcaranimation.surge.sh/Imagesandsound/track.png' alt='road'/>
      </div>
      <div className='car'>
        <img
        alt='road'
        src='http://hmcaranimation.surge.sh/Imagesandsound/car_body.png'
        width='740px'
        height= '270px'
        />
      </div>
      <div className='wheel' >
        <Wheel1 state={playState} speed = {speed}/>
        <Wheel2 state={playState} speed= {speed}/>
      </div>
        
    </div>
  );
}




export default App;
