import * as React from 'react' 
import { AnchorLink  } from 'gatsby-plugin-anchor-links' 
import { FiFacebook } from '@react-icons/all-files/fi/FiFacebook'
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram'
import { FiPhone } from '@react-icons/all-files/fi/FiPhone'
import { FiMail } from '@react-icons/all-files/fi/FiMail'
import {
     container,
     navLinks,
     navLinkItem,
     navLinkText,
     bighero,
     packages,
     testimonials,
     reviews,
     contact,
     footer,
     footerContainer,
     copyright,
 } from '../components/layout.module.css'


const Layout = ({title, children}) => {
    return(
        <main className={container}>
            <title>{title}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <AnchorLink to='/index#section1'className={navLinkText}
                        title='section1'></AnchorLink>
                    </li>
                    <li className={navLinkItem}>
                        <AnchorLink to='/index#section2' className={navLinkText} title='section2'> 
                        </AnchorLink>
                        </li>
                    <li className={navLinkItem}>
                        <AnchorLink to='/index#section3' className={navLinkText}title='section3'></AnchorLink>
                        </li>
                    <li className={navLinkItem}>
                        <AnchorLink to='/index#section4' className={navLinkText}title='section4'></AnchorLink>
                        </li>

                </ul>
            </nav>
            <section className={bighero}>
                {children}
            </section>
            <section className={section1} id='section1'>
                {children}
            </section>
            <section className={testimsection2onials} id='section2'>
                {children}
            </section>
            <section className={section3} id='section3'>
                {children}
            </section>
            <section className={secton4} id='section4'>
                {children}
            </section>
            <footer className={footer}>
                <div className={footerContainer}>
                <ul>
                    <li>
                    <FiFacebook />
                    </li>
                    <li>
                    <FiInstagram />
                    </li>
                    <li>
                    <FiPhone />
                    </li>
                    <li>
                    <FiMail />
                    </li>
                </ul>
                <p className={copyright}>© {title}</p>
                     </div>
            </footer>
        </main>
    )
}

export default Layout;