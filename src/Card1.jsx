import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { HiArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom';

const Card1 = () => {
    return (
        <Container>
            <Img>
                <img src="./images/svg with paths 1.svg" alt="" />
            </Img>
            <First>
                <Right>
                    <TextL>
                        <Fade up>
                            <h1>
                                25M+ Downloads
                            </h1>
                            <p>on appstore & google playstore</p>
                        </Fade>
                    </TextL>
                    <Textr>
                        <Fade up>
                            <img src="./images/b1.png" alt="" />
                        </Fade>
                        <Fade left>
                            <h1>ABC 123</h1>
                            <p>we are the best web development company in the world</p>
                        </Fade>
                    </Textr>
                </Right>
            </First>
            <Mid>
            </Mid>
            <Second>
                <Left>
                    <Fade up>
                        <img src="./images/c1.png" alt="" />
                    </Fade>
                    <Fade up>
                        <img src="./images/c2.png" alt="" />
                    </Fade>
                </Left>
            </Second>
            <Last>
                    <Fade left>
                        <p style={{ 'display': 'flex', 'alignItems': 'center' }}>Vies Case Study <HiArrowLongRight /></p>
                    </Fade>
                    
                    <Fade right>
                        <Link to={'/c2'}>
                            <p>S K I P</p>
                        </Link>
                  </Fade>
            </Last>
        </Container >
    )
}

export default Card1;
const Img = styled.div`
position: fixed;
    z-index: 999;
    transform: translate(-7.3rem,-8.5rem);
        img{
        width: 100%;
    }
`
const Last = styled.div`
position:absolute;
display:flex;
align-items:center;
bottom:2rem;
left:3rem;
gap:22rem;
cursor:pointer;
color:#c5bcbc;
p{
    color:#c5bcbc;
    display:flex;
    align-items:center;
    gap:0.3rem;
    font-size:16px;
    font-weight:400;
}
`
const Mid = styled.div`
width: 18rem;
height: 18rem;
position:fixed;
top:5rem;
left:33%;
border-radius:50%;
background: linear-gradient(45deg,#570589,#5c00a0);
`
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:100vh;
width:100%;
`
const Left = styled.div`
width:50%;
display:flex;
justify-content:center;
img{
    width:75%;
    text-align:center;
}

`
const Right = styled.div`
text-align:center;
display:flex;
color:white;
align-items:center;
flex-direction:column;
display: flex;
    align-items: center;
    height: 100vh;
    gap:6rem;
    justify-content: center;
`
const TextL = styled.div`
z-index: 999;
transform: translate(8rem,1rem);
h1{
    font-size: 56px;
}
p{
    text-align: right;
    font-size: 17px;
}
`
const Textr = styled.div`
width:45%;
text-align: left;
display:flex;
flex-direction:column;
align-items:start;
transform: translateX(-5rem);
img{
    margin:20px 0;
    opacity:0.25;
}
h1{
    font-size: 30px;
    padding: 5px 0;
}
p{
    font-size: 14px;
}
`
const First = styled.div`
background: linear-gradient(45deg, #4c1056, #5c00a0);
height:100vh;
width:43%;
margin:auto;
box-shadow: 0 0 14px #000000a1;
`
const Second = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`