import React, { useState, useEffect } from 'react'
import TextTransition, { presets } from "react-text-transition"
import { submessage } from '../../data.json'
import HomeIllustrator from '../../Illustrations/HomeIllustrator.js'
import Vector from '../../Illustrations/Vector.js'
import ProductList from './ProductList'

import { 
    Container,
    UpperLayer, 
    Tag, 
    Illustrator, 
    LowerLayer} from './HomeElements' 


const TEXTS = [
    "Payments online. Life is made so much easier and simply delightful.",
    "We bring convenience right into your hands. Time is money after all.",
    "Bill payments online! Life is made so much easier and simple delightful.",
    "We are helping to make it, send it and spend it for millions of customers."
  ]

const Home = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          5000 // every 3 seconds
        ); 
        return () => clearTimeout(intervalId);
      }, []);

      var pStyle = {
        'color': '#3352FF',
        'fontWeight': 600
      }
      var pStyle2 = {
        'color': '#58FF33',
        'fontWeight': 800,
        'display': 'flex',
        'justifyContent': 'center'
      }


    return (
        <Container>
         <UpperLayer>      
             <Tag>
             <p style={pStyle} >Safe, secure and private. Experience the new way of convenience.</p>
              <h1>
              <TextTransition
               text={ TEXTS[index % TEXTS.length] }
               springConfig={ presets.slow }
               />
               </h1>
               <Vector />
              </Tag>
              <Illustrator>
                  <HomeIllustrator/>
              </Illustrator>
         </UpperLayer>
         
         <LowerLayer>
           <p style={pStyle2 }>{submessage}</p>
          <ProductList />
         </LowerLayer>
        </Container>
    )
}

export default Home
