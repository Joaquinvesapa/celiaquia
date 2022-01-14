import React, {useState, useEffect} from 'react'
import NavBar from '../Nav/NavBar'
import {Circle, Head, HeadSection} from './HeaderElements'
import { Section, Section2, TextContent, Button } from './SectionElements'

const Header = () => {
    
    return (
        <div>
            <Head>
                <NavBar />
                <Circle style={{clipPath:" circle(700px at right 1300px)"}}/>
                <Circle style={{clipPath:" circle(660px at left -440px)"}}/>
                <Section>
                    <TextContent>
                        <h2>Soy Celiaco</h2>
                        <h2>No Extraterrestre</h2>
                        <p style={{fontWeight: "bold", fontSize: "24px"}}>¿Sabes que es la Celiaquia?</p>
                        <Button href='/mas-info'>
                            <p>Saber mas</p>
                        </Button>
                    </TextContent>
                </Section>
            </Head>
            <HeadSection>
                <Section>
                    <TextContent>
                        <h2>¿Que es esto?</h2>
                        <p style={{fontSize: "24px", fontWeight: "semi-bold"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </TextContent>
                </Section>    
            </HeadSection>
        </div>
    )
}

export default Header
