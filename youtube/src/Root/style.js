import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`
export const Bodyrouter = styled.div`
   display: flex;
   width: 100%;
   overflow-y: scroll;
   justify-content: space-between;
`
export const Navba = styled.div`
   width: 100%;
`
export const Body = styled.div`
   display: flex;
   width: 100%;
   overflow-y: scroll;
   background: #242424;
   position: relative;
@media screen and (max-width: 900px)  {position: absolute;}
`
export const BodyRoute = styled.div`
   display: flex;
   width: 100%;
@media screen and (max-width: 1100px)  {position: absolute;  padding-left: 70px;}
@media screen and (max-width: 900px)  { padding-left: 0px;}
`
export const Sidebars = styled.div`
   display: flex;
   background: #212121; 
@media screen and (max-width: 900px)  { position: absolute;}
`