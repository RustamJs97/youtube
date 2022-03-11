import styled from 'styled-components';

export const Container = styled.div`
   padding: 30px;
   display: flex;
   width: 100%;
   height: 100vh;
   color: white;
   .video{
   }
`
export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: ${({ d }) => !d ? '70%' : '30%'};
   height: 100vh;
   color: white;
   margin: 0 5px;

`