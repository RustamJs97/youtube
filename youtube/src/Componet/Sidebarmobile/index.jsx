import React, { useContext } from 'react';
import { Container, Cont, Wrapper, Wrap, Title, } from './style'
import { SidebarIcon } from '../../Mock/Sidebar'
import { Link } from 'react-router-dom'
import { Fals } from '../../Context/all/context'
import Slide from 'react-reveal/Slide';

const Sidebar = () => {
    const [activ, setActiv] = useContext(Fals)
    const fal = () => { setActiv(false) }
    return <Container>

        <Cont>
            <Slide right duration={600} delay={0}>
                <Wrapper >

                    {
                        SidebarIcon.a.map(({ id, title, Icon, path }) => {
                            return (
                                <Link onClick={fal} className='linkin' style={{ textDecoration: 'none' }} key={id} exact to={path}>
                                    <Wrap key={id}>
                                        <Icon className="icons" />
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
                                <Link onClick={fal} className='linkin' style={{ textDecoration: 'none' }} key={id} exact to={path}>
                                    <Wrap key={id}>
                                        <Icon className="icons" />
                                        <Title>{title}</Title>
                                    </Wrap>
                                </Link>
                            )
                        })
                    }
                </Wrapper>
            </Slide >

        </Cont>





    </Container >
}

export default Sidebar
