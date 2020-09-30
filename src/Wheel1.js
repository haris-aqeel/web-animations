import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";


const Wheel1 = (props) => {
  const { ref,  getAnimation } = useWebAnimations({
    keyframes: {
      transform: ['rotate(360deg)']
    },
    timing: {
      iterations: Infinity,
      duration: 2000,
      delay: 1000,
    }
  })


  const play = () => {
    getAnimation().play();
  };

  const pause = () => {
    getAnimation().pause();
  };

  if (props.state === 'paused') {
    pause()
  } else if (props.state === 'running') {
    play()
    getAnimation().updatePlaybackRate(props.speed)
    
  }

  return (
    <img id='wheel1' ref={ref} alt='wheel' src='http://hmcaranimation.surge.sh/Imagesandsound/car_wheel_left.png' />
  )
}

export default Wheel1;