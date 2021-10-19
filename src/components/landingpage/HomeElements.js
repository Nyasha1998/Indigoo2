import styled from "styled-components";


export const Container = styled.div`

background-image: url(../../background.png);
background-repeat: no-repeat;
background-position: center; /* Center the image */

`   

export const Tag = styled.div`
  display: flex;
  flex-direction: column;


  padding: 2rem 1rem 2rem 4rem;
`

export const Illustrator = styled.div``

export const UpperLayer = styled.div`
  display: flex;
  flex-direction: row; 
  padding: 2rem 1rem 2rem 2rem;
  
  @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
  }
`

export const LowerLayer = styled.div`
  padding: 2rem 5rem 2rem 5rem;
  background-color: #2157A0;
`

export const Cards = styled.div`  
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-template-row: 1fr 1fr;
 

 @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-row: 1fr 1fr 1fr;
    
 }

 @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-row: 1fr;
   
 }


`

export const SingleCard = styled.div`
  background-color: #FBFFFF;
  color: #2157A0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  flex-wrap: nowrap;
  margin: 2rem 2rem 2rem 2rem;
  padding-left: 0.5rem;
`