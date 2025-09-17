import { useState } from 'react'
import './App.css'
import Accordian from './components/acordian'
import { RandomColour } from './components/randomColour'
import { StarRating } from './components/StarRating'
import { ImageSlider } from './components/imageSlider/ImageSlider.jsx'
import { Image } from './components/imgSliderguided/Image.jsx'

function App() {

  return (
    <>
      <Image url={'https://picsum.photos/v2/list/'} limit={5} page={1} />
    </>
  )
}

export default App
