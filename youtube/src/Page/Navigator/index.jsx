import React, { useContext } from 'react'
import bg from '../../Img/jpg/wb.jpg'
import { Container } from './styled'
import { Fals } from '../../Context/all/context'

const History = () => {
    const [activ, setActiv] = useContext(Fals)
    const fal = () => { setActiv(false) }

    return (
        <Container onClick={fal}>
            <img src={bg} alt="" />
            <h1>Web Brain Academy</h1>
            <h3>ReactJS ustoz</h3>
            <h2>Sardor Muhtorov</h2>
            <h2>Fozilxon Buzrukxojayev</h2>
            <a href="https://t.me/webbrain_academy">   <h6>telegram: https://t.me/webbrain_academy</h6></a>

            <a href="tel:+998977630774"><h6 > tel: +998977630774</h6></a>
        </Container>
    )
}

export default History
