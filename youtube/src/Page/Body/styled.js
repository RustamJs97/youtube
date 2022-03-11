import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 100%;
   overflow-x: hidden;
   overflow-y: scroll;

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
.aa{
       margin-top: 50px;
   }
.cars{
    margin: 10px 5px;
}

`
export const Nava = styled.div`
    width: 100%;
    position: fixed;
    z-index: 9999;
    background: #fff;
`
export const Card = styled.div`
    z-index: -1;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`
export const Cards = styled.div`
    margin-top: 50px;
    padding: 0px 5px 0 5px;
@media screen and (max-width: 900px)  {
    margin-top: 20px;
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
