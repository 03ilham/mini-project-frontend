import React from 'react'
import { Home } from '../pages'
import Footers from './Footers'
import MainLayout from './MainLayout'

export default function MainNavbar() {
    return (
        <div>
            <MainLayout className=' sticky top-0'/>
            <Home/>
            <Footers/>
        </div>
    )
}
