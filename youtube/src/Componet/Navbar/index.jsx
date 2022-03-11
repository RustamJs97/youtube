import React, { useContext } from 'react'
import { Container, Wrapper, Menu, Title, Titls, Input, Signal, Search, Menubar, Video, Keyboard, Mic } from './style'
import { HomeCon } from '../../Context/Home/context'
import { Fals } from '../../Context/all/context'
import logo from '../../Img/jpg/y.png'
import acount from '../../Img/jpg/acount.jpg'
import { App } from '../../Mock/asosiy'
import { Link } from 'react-router-dom'

const SideNav = () => {
    const [data, setData] = useContext(HomeCon)
    const [activ, setActiv] = useContext(Fals)

    const onSearch = (e) => {
        const newData = data.filter((v) => v["text"].toLowerCase().includes(e.target.value.toLowerCase()))
        setData(newData)
        e.target.value == '' && setData(App)
    }
    const abc = () => setActiv(!activ)

    return <Container>
        <Wrapper a >
            <Menu onClick={abc} />
            <Link style={{ textDecoration: 'none' }} to='/'>
                <img src={logo} className='logo' alt="logo" />
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/'>
                <Title>YouTube</Title>
            </Link>
        </Wrapper>

        <Wrapper c>
            <Input>

                <input className='input' type="text" onChange={onSearch} placeholder="search" /> <Keyboard className='sv' /> <Search className='s' /></Input> <Mic />
        </Wrapper>

        <Wrapper b >
            <Video /><Menubar className='icon' /><Signal />
            <img src={acount} className='acount' alt="acount" />
        </Wrapper>

        <div className='r'>
            <Link style={{ textDecoration: 'none' }} to='/'>
                <Titls>YouTube</Titls>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/'>

                <img src={logo} className='logo-r' alt="logo" />
            </Link>
        </div>
    </Container>
}

export default SideNav
