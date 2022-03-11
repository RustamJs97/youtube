import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 100%;
   overflow-x: hidden;
   justify-content: space-around;
   align-items: center;
   overflow-y: scroll;
   height: 100vh;
   .imga{
    width: 100%;
    min-width: 350px;
    height: 400px;
    background-size: cover;
    }
.logos{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
   }
   .logo{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
   }
.aa{
       margin-top: 50px;
   }
.cars{
    margin: 10px 5px;
}
.card{
height: 200px;
}
@media screen and (max-width: 650px)  {
    flex-direction: column;
    overflow-y: none;
    .imga{
    width: 300px;
    height: 150px;
    background-size: cover;
    }
    .logos{
    width: 30px;
    height: 30px;
    margin-right: 10px;
   }
   .imga{
    min-width: 350px;
    height: 180px;
    }
}

`
export const Wrapp = styled.div`
width: ${({ a }) => a ? '100%' : '330px'};
padding: ${({ a }) => a ? '20px' : '20px 5px 5px 5px'};
overflow-y: ${({ b }) => b && 'scroll'};
height: 100vh;
cursor: pointer;
@media screen and (max-width: 650px)  {
    overflow-y: ${({ a }) => a && 'scroll'};
    width: ${({ a }) => a && '330px'};
    padding: ${({ a }) => a && '20px 5px 5px 5px'};
    overflow-y: ${({ b }) => b && 'none'};
    height: 100%;

}

`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    z-index: -1;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const Cards = styled.div`
    margin-top: 50px;
    padding: 0px 5px 0 5px;

`
Card.Wrap = styled.div`
    display: flex;
`
Card.Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;

`
Card.Title = styled.div`
    font-size: 30px;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
     @media screen and (max-width: 650px)  {
font-size: 16px;
}
`
Card.Desc = styled.div`
    font-size: 12px;
    color: #919191;
    white-space: nowrap;
    text-overflow: ellipsis;
`