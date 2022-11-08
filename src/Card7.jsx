import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { HiArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Card7 = () => {
    return (
        <Container>
            <Img>
                <img src="./images/svg with paths 7.svg" />
            </Img>
            <First>
                <Right>
                    <TextL>
                        <Fade up>
                            <p style={{ 'text-align': 'left' }}>Biggest Classified</p>
                            <h1>
                                East Asia
                            </h1>
                            <p style={{ 'text-align': 'right' }}>Countries</p>
                        </Fade>
                    </TextL>
                    <Textr>
                        <Fade down>
                            <img src="./images/b2.png" />
                        </Fade>
                        <Fade left>
                            <h1>ABC 23478</h1>
                            <p>we are the best <br />web development company in the world</p>
                        </Fade>
                    </Textr>
                </Right>
            </First>
            <Mid>
            </Mid>
            <Second>
                <Link to={'/'}>
                    <Left>
                        <Img1   >
                            <Fade down>
                                <img src="./images/c7-1.png" alt="" />
                            </Fade>
                        </Img1>
                        <Img2>
                            <Fade up>
                                <img src="./images/c7-2.png" alt="" />
                            </Fade>
                        </Img2>
                    </Left>
                </Link>
            </Second>
            <Last>
                <Zoom>
                    <p>View Case Study <HiArrowLongRight /></p>
                    <Link to={'/'}>
                        <p>S K I P</p>
                    </Link>
                </Zoom>
            </Last>
        </Container >
    )
}

export default Card7;
const Img1 = styled.div`
position: absolute;
    width: 16%;
    right: 6rem;
    bottom: 1rem;
`
const Img2 = styled.div`
position: absolute;
    width: 19%;
    bottom: 0rem;
    right: 16rem;
`
const Img3 = styled.div`
position:absolute;
width: 11%;
top: -8rem;
right: 4%;
`
const Img4 = styled.div`
position:absolute;
width: 17%;
    right: 15rem;
    top: 6rem;
`
const Img5 = styled.div`
position:absolute;
width: 24%;
right: 0;
bottom: -4rem;
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
position:fixed;
top:5rem;
left:33%;
border-radius:50%;
background: #1c7752;
`
const Container = styled.div`
display: flex;
align-items: center;
height:100vh;
width:100%;
`
const Left = styled.div`
width:65%;
display:flex;
justify-content:space-between;
img{
    width:100%;
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
    gap:0rem;
    justify-content: center;
`
const TextL = styled.div`
z-index: 999;
transform: translate(15rem,0rem);
h1{
    font-size: 4rem;
}
p{
    text-align: right;
    font-size: 17px;
}
`
const Textr = styled.div`
width:42%;
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
background: #1c7752;
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
background:#00bf72;
`