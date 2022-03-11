import React, { useContext } from 'react'
import { Container, Cont, Wrapper, Wrap, Title, Past } from './style'
import { SidebarIcon } from '../../Mock/Sidebar'
import { Link } from 'react-router-dom'
import { Fals } from '../../Context/all/context'
import Slide from 'react-reveal/Slide';


const Sidebar = () => {
    const [activ, setActiv] = useContext(Fals)
    const fal = () => { setActiv(false) }
    return <Container>

        {activ ?
            <Cont>
                <Slide left cascade duration={400} delay={0}>
                    <Wrapper >
                        {
                            SidebarIcon.a.map(({ id, title, Icon, path }) => {
                                return (
                                    <Link className='linkin' style={{ textDecoration: 'none' }} key={id} to={path}>
                                        <Wrap onClick={fal} key={id}>
                                            <Icon className="icon" />
                                            <Title >{title}</Title>
                                        </Wrap>
                                    </Link>
                                )
                            })
                        }
                    </Wrapper>

                    <Wrapper >
                        {
                            SidebarIcon.b.map(({ id, title, Icon, path }) => {
                                return (
                                    <Link className='linkin' style={{ textDecoration: 'none' }} key={id} to={path}>
                                        <Wrap onClick={fal} key={id}>
                                            <Icon className="icon" />
                                            <Title>{title}</Title>
                                        </Wrap>
                                    </Link>
                                )
                            })
                        }
                    </Wrapper>

                    <Wrapper >
                        <h3>obunalar</h3>
                        {
                            SidebarIcon.podpiska.map(({ id, title, img }) => {
                                return (
                                    <Wrap onClick={fal} key={id}>
                                        <img src={img} alt="ss" className="img" />
                                        <Title>{title}</Title>
                                    </Wrap>
                                )
                            })
                        }
                        <div className="yana"><Past /><Title>pastga</Title> </div>
                    </Wrapper>
                </Slide>
            </Cont>
            : ''
        }
    </Container >
}

export default Sidebar
