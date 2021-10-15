import React from 'react'
import Vector from '../../Illustrations/Vector'
import Amico from '../../Illustrations/Amico'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import ContactForm from './ContactForm';
import ProductList from '../../components/landingpage/ProductList'
import { submessage } from '../../data.json'

import { 
    Container,
    UpperLayer, 
    Left, 
    Right, 
    MiddleLayer, 
    Products,
    WhyUs, 
    Card,
    LowerLayer, 
    Socials,
    Address,
    TeamElement
} from './AboutElements.js'
import { tag, vision, mission, goals,} from '../../data.json'
import { data } from './Data.js'
import TeamCar from './TeamCar'


const Index = () => {

    var pStyle = {
        'color': '#3352FF',
        'fontWeight': 600
      }

    var bStyle = {
        'backgroundColor': '#58FF33',
        'color': '#3352FF',
        'fontWeight': 600,
        'width': 250,
        'marginTop': 10,
        'borderRadius': 10
    }

    var hStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10
    }

    var lStyle = {
        'listStyleType': 'none'
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
            <Left>
                <p style={pStyle}>{tag}</p>
                <h1>join us, be part of the movement</h1>
                <Vector />
                <Button variant="contained" style={bStyle}>Become an agent</Button>  
            </Left>
            <Right>
                <Amico />
          </Right>
        </UpperLayer>   
        <Products>
        <p style={pStyle2 }>{submessage}</p>
          <ProductList />
        </Products>
        <MiddleLayer>
            <h1 style={hStyle}>Why choose us</h1>
            <WhyUs>
                <Card>
                    <p style={hStyle}><strong>Our Vision</strong></p>
                    {vision}
                </Card>
                <Card>
                    <p><strong style={hStyle}>Our Mission</strong></p>
                    {mission}
                </Card>
                <Card>
                    <p><strong style={hStyle}>Our Goals</strong></p>
                    {goals}
                </Card>
            </WhyUs>
            <h1 style={hStyle}>Meet the team</h1>
            <TeamElement>
            <TeamCar /> 
            </TeamElement>
                
        </MiddleLayer>  
        <LowerLayer>
          <Left>  
            <h2>Give us a visit or simply call us!</h2>
            <hr
            style={{
              color: "#2157A0",
              fontWeight: 3500,
              width: 100,
              marginTop: 4,
              marginBottom: 4

            }}
             />
            <Address>
            <ul>
                {data.map((infor) => <li style={lStyle}>{infor}</li>)}
            </ul>
            </Address>
            
           <Socials>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
           </Socials>   
            </Left>
           
        <ContactForm /> 
        </LowerLayer>
    </Container>       
    )
}

export default Index
