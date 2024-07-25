import styled from 'styled-components'

export const Li = styled.li``

export const LiButton = styled.button`
    padding: 8px 20px;
    border-radius:  15px;
   border: ${props => {
     if (props.active === true) {
       return 'none'
     }
     return '1.5px solid #db1c48'
   }};
   background-color: ${props => {
     if (props.active === true) {
       return '#db1c48'
     }
     return 'transparent'
   }};
   color: ${props => {
     if (props.active === true) {
       return '#ffffff'
     }
     return '#db1c48'
   }};
  /
`
