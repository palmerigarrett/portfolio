import React from 'react'
import '../../App.css'
// import Sidebar from './Sidebar'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import { VscGithub } from 'react-icons/vsc'

const { useState } = React;

function Header() {
    const [sidebar, setSidebarState] = useState(false)
    const visible = sidebar ? 'show' : 'hide'

    const toggleSidebar = (e) => {
        const toggle = sidebar ? false : true;
        setSidebarState(toggle);
    }

    return (
        <>
            <Navbar id="sidebar" className={`${visible} header`} style={{ display: "inline-table" }} variant="light">
                <Nav style={{ width: '20em' }}>
                        <Col>
                            <Navbar.Brand style={{ textAlign: 'center' }}>
                                <img
                                    src="/portfolio/profilepic.png"
                                    width="50%"
                                    onClick={toggleSidebar}
                                    alt=''
                                />
                            </Navbar.Brand>
                            <Row>
                                <Nav.Item>
                                    <div className="font" style={{ textAlign: 'center' }}>
                                        <b>About</b>
                                        <br />
                                        <br />
                                        <span>
                                            Full-Stack Software Engineer based in the Greater New York City area looking
                                            to implement and build on my knowledge of Web Development while solving complex 
                                            problems to make a measurable impact in my organization.
                                        </span>
                                    </div>
                                </Nav.Item>
                            </Row>
                            
                            {/* <Row>
                                <Nav.Item>
                                    <VscGithub className='icon' />
                                </Nav.Item>
                            </Row> */}
                        </Col>
                    
                </Nav>
            </Navbar>

            <Navbar variant="light" className="header" style={{ padding: `${sidebar ? '0' : ''}` }}>
                <Navbar.Brand>
                    { sidebar ? (
                        <Button style={{ backgroundColor: 'hsl(0, 0%, 98%)', borderColor: 'hsl(0, 0%, 98%)', padding: '0', marginLeft: '1em' }} onClick={toggleSidebar}>
                            <div style={{ color: 'black', fontFamily: 'Montserrat', fontWeight: '500', fontSize: '2em' }}>x</div>
                        </Button>
                    ) : (
                        <img
                        src="/portfolio/sandwich.png"
                        id="sandwich"
                        style= {{ opacity: `${sidebar ? '0' : ''}` }}
                        onClick={toggleSidebar}
                        alt=''
                        />
                    )}
                </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default Header;