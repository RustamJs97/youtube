import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { HomeCon } from '../../Context/Home/context'
import { Container, Wrapp, Card } from './styled'
import Video from '../../Componet/Home/Card'
const HomeClone = () => {
  const [data, setData] = useContext(HomeCon)
  const { id } = useParams()
  return <Container >
    <Wrapp a>
      {
        data.filter((v) => v.id == id.replace(':', '')).map(({ id, video, text, desc, logo }) => {
          return <div key={id}>
            <Card >
              <div >
                <iframe className="imga"
                  src={video} title="YouTube video player"
                  frameBorder="0" controls >
                </iframe>
              </div>
              <Card.Wrap >
                <img src={logo} className='logos' alt="" />
                <Card.Text>
                  <Card.Title>{text}</Card.Title>
                  <Card.Desc>{desc}</Card.Desc>
                </Card.Text>
              </Card.Wrap>
            </Card>
          </div>
        })
      }
    </Wrapp>
    <Wrapp b>
      <Video className='card' />
    </Wrapp>
  </Container>
}

export default HomeClone
