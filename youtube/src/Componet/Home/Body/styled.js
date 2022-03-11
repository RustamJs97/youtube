import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 100%;
   height: 100vh;
   overflow-x: hidden;
   overflow-y: scroll;
   padding: 60px 2px 2px 2px;
.img{
    width: 100%;
    height: 160px;
    background-size: contain;
    }
.logo{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
   }
.aa{margin-top: 50px;}
.cars{margin: 10px 5px;}

`
export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    cursor: pointer;
`
export const Card = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 370px;
    min-width: 270px;
    margin: 2px 2px 30px 2px;
    z-index: -1;
@media screen and (max-width: 615px)  {max-width: 450px;
}

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
    font-size: 16px;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
`
Card.Desc = styled.div`
    font-size: 12px;
    color: #919191;
    white-space: nowrap;
    text-overflow: ellipsis;
`