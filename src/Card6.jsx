import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { HiArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Card6 = () => {
    return (
        <Container>
            <Img>
                <img src="./images/svg with paths 6.svg" />
            </Img>
            <First>
                <Right>
                    <TextL>
                        <Fade up>
                            <p style={{ 'text-align': 'left' }}>Developing er solution for</p>
                            <h1>
                                Text Headline
                            </h1>
                            <p style={{ 'text-align': 'right' }}>in furniture industry</p>
                        </Fade>
                    </TextL>
                    <Textr>
                        {/* <Fade up>
                            <img src="./images/b1.png"  />
                        </Fade> */}
                        <Fade left>
                            <h1>ABC 567</h1>
                            <p>Best since 2007 <br />we offer wide range of web development and app development</p>
                        </Fade>
                    </Textr>
                </Right>
            </First>
            <Mid>
            </Mid>
            <Second>
                <Link to={'/c7'}>
                    <Img1>
                        <Fade up>
                            <img src="./images/c-6.png" alt="" />
                        </Fade>
                    </Img1>
                    {/* <Left>
                    <Img1   >
                        <Fade down>
                            <img src="./images/c5-1.png" alt="" />
                        </Fade>
                    </Img1>
                    <Img2>
                        <Fade up>
                            <img src="./images/c5-2.png" alt="" />
                        </Fade>
                    </Img2>
                    <Img3>
                        <Fade down>
                            <img src="./images/c5-3.png" alt='' />
                        </Fade>
                    </Img3>

                    <Img4  >
                        <Fade up>
                            <img src="./images/c5-4.png" alt="" />
                        </Fade>
                    </Img4>
                    <Img5>
                        <Fade up>
                            <img src="./images/c5-5.png" alt="" />
                        </Fade>
                    </Img5>
                </Left> */}
                </Link>
            </Second>
            <Last>
                <Zoom>
                    <p>View Case Study <HiArrowLongRight /></p>
                    <Link to={'/c7'}>
                        <p>S K I P</p>
                    </Link>
                </Zoom>
            </Last>
        </Container >
    )
}

export default Card6;
const Img1 = styled.div`

`
const Img2 = styled.div`
position: absolute;
    width: 16%;
    bottom: -7rem;
    left: 46%;
`
const Img3 = styled.div`
position: absolute;
width: 14%;
top: -3rem;
right: 18%;
`
const Img4 = styled.div`
position: absolute;
width: 16%;
right: 20rem;
bottom: -12rem;
`
const Img5 = styled.div`
position: absolute;
    width: 16%;
    right: 0rem;
    bottom: 7rem;
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
z-index:10;
position:fixed;
top:5rem;
left:33%;
border-radius:50%;
background: linear-gradient(45deg,#1b1b58,#242478);
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
    gap:6rem;
    justify-content: center;
`
const TextL = styled.div`
z-index: 999;
transform: translate(12rem,-3rem);
h1{
    font-size: 4rem;
}
p{
    text-align: right;
    font-size: 17px;
}
`
const Textr = styled.div`
width:40%;
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
background: linear-gradient(45deg,#0e0e1d,#242478);
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
background:url('./images/c_back.jpg');
background-position:center;
img{
    width:100%;
}
`