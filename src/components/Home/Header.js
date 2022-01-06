import React from 'react'
import NavBar from '../Nav/NavBar'
import {Circle, Head, /* HeadContent ,*/ HeadSection} from './HeaderElements'

const Header = () => {
    return (
        <div>
            <Head>
                <Circle style={{clipPath:" circle(700px at right 1300px)"}}/>
                <Circle style={{clipPath:" circle(700px at left -440px)"}}/>
                <NavBar/>
            </Head>
            <HeadSection/>     
        </div>
    )
}

export default Header
