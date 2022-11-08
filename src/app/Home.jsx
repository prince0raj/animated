import React from 'react'
import Card1 from '../Card1';
import styled from 'styled-components';
import { RiChatSmileFill } from 'react-icons/ri'

const Home = () => {
    return (
        <Wrap>
            <Chat>
                <RiChatSmileFill />
            </Chat>
            <Card1 />
        </Wrap>
    )
}

export default Home;


const Wrap = styled.div`
`

const Chat=styled.div`
padding-top: 7px;
padding-left: 7px;
padding-right: 7px;
position: fixed;
background: #027dbe;
border-radius: 50%;
right: 2rem;
bottom: 2rem;
box-shadow: 0 0 7px #00000063;
svg{
    font-size:28px;
}
svg g{
    color:white;
}
`