import React from 'react'
import {Head, Circle, HeadContent, HeadSection} from './HeaderElements'

const Header = () => {
    return (
        <div>
            <Head>
                <Circle style={{zindex: "1", top: '74%', left: '63%'}}/>
                <Circle style={{zindex: "2", bottom: "405%", right: "29%"}}/>
                <HeadContent>
                        Soy Celiaco, no Extraterrestre
                </HeadContent>
                     
            </Head>
            <HeadSection/>     
        </div>
    )
}

export default Header
