import React, {useState, useEffect} from 'react'
import NavBar from '../Nav/NavBar'
import {Circle, Head} from './HeaderElements'
import { Section, TextContent } from './SectionElements'

const Header = () => {
    
    return (
        <div>
            <Head>
                <NavBar />
                <Circle style={{clipPath:" circle(700px at right 1300px)"}}/>
                <Circle style={{clipPath:" circle(700px at left -440px)"}}/>
                <Section>
                    <TextContent>
                        <h2>Soy Celiaco</h2>
                        <h2>No Extraterrestre</h2>
                    </TextContent>
                </Section>
            </Head>
        </div>
    )
}

export default Header
