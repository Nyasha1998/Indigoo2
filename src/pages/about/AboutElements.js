import styled from 'styled-components'

export const Container = styled.div`
`

export const UpperLayer = styled.div`
  display: flex;
  flex-direction: row;  
  padding: 2rem 2rem 2rem 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
}
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 4rem;  
  text-style: none;
  margin-top: 2.1
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 2rem;
`

export const MiddleLayer = styled.div`
`

export const WhyUs = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr 1fr;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 6rem;
  margin-right: 6rem;


  @media screen and (max-width: 768px) {
      display: grid;
      grid-template-rows: 1fr;
  }
`

export const TeamElement = styled.div`
  
`

export const Card = styled.div`
  padding: 2rem 2rem 2rem 2rem;
`

export const LowerLayer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 1rem;
  }
`


export const Products = styled.div`
  padding: 2rem 5rem 2rem 5rem;
  background-color: #2157A0;
`


export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem;
  cursor: pointer;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 2rem 2rem 2rem 2rem;

`

export const Address = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 2rem;  
  margin-top: 0.7rem;

`

