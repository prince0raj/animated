import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
const Card3 = () => {
    return (
        <Container>
            <Img>
                <img src="./images/svg with paths 3.svg" alt="" />
            </Img>
            <First>
                <Right>
                    <TextL>
                        <Fade up>
                            <p style={{ 'text-align': 'left' }}>Powered by advance</p>
                            <h1>
                                NASA
                            </h1>
                            <p style={{ 'text-align': 'right' }}>algorithms</p>
                        </Fade>
                    </TextL>
                    <Textr>
                        {/* <Fade up>
                            <img src="./images/b1.png" alt="" />
                        </Fade> */}
                        <Fade left>
                            <h1>ABC 234</h1>
                            <p>we are the best web development company in the world</p>
                        </Fade>
                    </Textr>
                </Right>
            </First>
            <Mid>
            </Mid>
            <Second>
                <Left>
                    <Img1>
                        <Fade up>
                            <img src="./images/c5.png" alt="" />
                        </Fade>
                    </Img1>
                    <Img2>
                        <Fade down>
                            <img src="./images/c6.png" alt="" />
                        </Fade>
                    </Img2>
                </Left>
            </Second>
            <Last>
            <Fade left>
                        <p style={{ 'display': 'flex', 'alignItems': 'center' }}>Coming soon</p>
                    </Fade>
                    
                    <Fade right>
                        <Link to={'/c4'}>
                            <p>S K I P</p>
                        </Link>
                  </Fade>
            </Last>
        </Container >
    )
}

export default Card3;
const Img1 = styled.div`
transform: translate(0rem, 7rem);
`
const Img2 = styled.div`
transform: translate(6rem, -10rem);
`
const Img = styled.div`
position: fixed;
    z-index: 999;
    transform: translate(31.45rem,-8.5rem);
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
    position: fixed;
    top: 5rem;
    left: 33%;
    border-radius: 50%;
    background: #0a0c32;
`
const Container = styled.div`
display: flex;
align-items: center;
height:100vh;
width:100%;
`
const Left = styled.div`
width:59%;
display:flex;
justify-content:space-between;
img{
    width:100%;
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
transform: translate(16rem,-1rem);
h1{
    font-family: 'Audiowide', cursive;
    font-size: 5rem;
}
p{
    text-align: right;
    font-size: 17px;
}
`
const Textr = styled.div`
width:35%;
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
    font-size: 3rem;
    padding: 5px 0;
}
p{
    opacity:0.8 !important;
    font-size: 14px;
}
`
const First = styled.div`
background: #0a0c32;
height:100vh;
width:41.95%;
box-shadow: 0 0 14px #000000a1;
`
const Second = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 58%;
background: linear-gradient(45deg,#212461,#0e1041);;
`