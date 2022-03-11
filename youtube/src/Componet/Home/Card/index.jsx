import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fals } from '../../../Context/all/context'
import { HomeCon } from '../../../Context/Home/context'
import { Body, Card } from '../Body/styled'
const Cardlar = () => {
  const [data, setData] = useContext(HomeCon)
  const [activ, setActiv] = useContext(Fals)
  const fal = () => { setActiv(false) }

  const navigate = useNavigate()
  return (
    <Body onClick={fal}>
      {
        data.map(({ id, video, text, desc, logo }) => {
          return <div key={id}>
            <Card >

              <div >
                <iframe className="img"
                  src={video} title="YouTube video player"
                  frameBorder="0" controls >
                </iframe>
              </div>

              <div onClick={() => navigate(`/${id}`)}>
                <Card.Wrap >
                  <img src={logo} className='logo' alt="" />
                  <Card.Text>
                    <Card.Title>{text}</Card.Title>
                    <Card.Desc>{desc}</Card.Desc>
                  </Card.Text>
                </Card.Wrap>
              </div>

            </Card>
          </div>
        })
      }
    </Body >
  )
}

export default Cardlar
