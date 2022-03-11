import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import SidebarM from '../Componet/Sidebarmobile';
import Sidebar from '../Componet/Sidebar';
import Home from '../Page/Home'
import { Container, Navba, Sidebars, Bodyrouter, BodyRoute } from './style'
import Navbar from '../Componet/Navbar'
import Navigator from '../Page/Navigator'
import Subscriptions from '../Page/Subscriptions'
import Libary from '../Page/Libary'
import History from '../Page/History'
import Watchlater from '../Page/Watchlater'
import { Fals } from '../Context/all/context'
const Root = () => {
    const [activ, setActiv] = useContext(Fals)
    return (<Container className='d-flex'>

        <Navba>
            <Navbar />
        </Navba>


        <Bodyrouter >
            <Sidebars>{activ ?
                <Sidebar className='side' />
                :
                <SidebarM />
            }</Sidebars>
            <BodyRoute>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/navigator" element={<Navigator />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/libary" element={<Libary />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/:id" element={<Watchlater />} />
                </Routes>
            </BodyRoute>

        </Bodyrouter>
    </Container >)
}

export default Root;
