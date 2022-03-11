import React, { useContext } from 'react'
import { Contaner } from './styled'
import { Fals } from '../../Context/all/context'

const History = () => {
    const [activ, setActiv] = useContext(Fals)
    const fal = () => { setActiv(false) }

    return (
        <Contaner onClick={fal}>
            <iframe width="100%" height="70%" src="https://www.youtube.com/embed/GTWfTl_zJm8"
                title="YouTube "
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <h3>MuhammadRustam</h3>
            <h6 ><a href='https://t.me/Web_Code_Academy'>Telegram: @Programer001</a> </h6>
        </Contaner>
    )
}

export default History
