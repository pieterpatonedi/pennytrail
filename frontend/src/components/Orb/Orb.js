import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useScreenSize } from '../../utils/useScreenSize';

function Orb() {
    const {width, height} = useScreenSize()
    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `;
    const OrbStyled = styled.div`
        width: 60vh;
        height: 60vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(400px);
        animation: ${moveOrb} 8s alternate linear infinite;
    `;
  
    return (
    <OrbStyled></OrbStyled>
  )
}

export default Orb
