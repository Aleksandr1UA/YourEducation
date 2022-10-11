import '../scss/custom.scss';
import { Col, Container, Dropdown, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Facebook, Globe, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import ChangeTheme from './ChangeTheme';

function Footer() {

    return <footer className={'pt-5'}>
        <Container>
            <Row className={'g-4'}>
                <Col lg={3}>
                    <Link to='#' className={'me-0'}>
                        <img className={'logo-item-footer'} src={'./images/logo-img.jpeg'} alt={'logo'} /> 
                    </Link>
                    <p className={'my-3'}>
                        Eduport education theme, built specifically for the education centers which is dedicated to 
                        teaching and involve learners.
                    </p>
                    <ul className={'list-inline mb-0 mt-3'}>
                        <li className={'list-inline-item'}>
                            <Link to='#' className={'btn btn-white btn-sm shadow px-2'}>
                                <Facebook className={'fab fa-fw text-facebook'} />
                            </Link>
                        </li>
                        <li className={'list-inline-item'}>
                            <Link to='#' className={'btn btn-white btn-sm shadow px-2'}>
                                <Instagram className={'fab fa-fw text-instagram'} />
                            </Link>
                        </li>
                        <li className={'list-inline-item'}>
                            <Link to='#' className={'btn btn-white btn-sm shadow px-2'}>
                                <Twitter className={'fab fa-fw text-twitter'} />
                            </Link>
                        </li>
                        <li className={'list-inline-item'}>
                            <Link to='#' className={'btn btn-white btn-sm shadow px-2'}>
                                <Linkedin className={'fab fa-fw text-linkedin'} />
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col lg={6}>
                    <Row className={'g-4'}>
                        <Col md={4} className={'col-6'}>
                            <h5 className={'mb-2 mb-md-4 fw-bold'}>Company</h5>
                            <Nav as={'ul'} className={'flex-column'}>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>About us</Link>
                                </Nav.Item>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>Contact us</Link>
                                </Nav.Item>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>News and Blogs</Link>
                                </Nav.Item>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>Library</Link>
                                </Nav.Item>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>Career</Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={4} className={'col-6'}>
                            <h5 className={'mb-2 mb-md-4 fw-bold'}>Community</h5>
                            <Nav as={'ul'} className={'flex-column'}>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>Documantation</Link>
                                </Nav.Item>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>FAQ</Link>
                                </Nav.Item>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>Forum</Link>
                                </Nav.Item>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>Sitemap</Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={4} className={'col-6'}>
                            <h5 className={'mb-2 mb-md-4 fw-bold'}>Teaching</h5>
                            <Nav as={'ul'} className={'flex-column'}>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>Become a teacher</Link>
                                </Nav.Item>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>How to guide</Link>
                                </Nav.Item>
                                <Nav.Item as={'li'}>
                                    <Link to='' className={'nav-link nav-link-footer fw-bold ps-0'}>Terms & Conditions</Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3}>
                    <h5 className={'mb-2 mb-md-4 fw-bold'}>Contact</h5>
                    <p className={'mb-2'}>
                        Toll free:
                        <span className={'h6 fw-light ms-2'}>+1234 567 891</span>
                        <span className={'d-block small'}>(9:AM to 8:PM IST)</span>
                    </p>
                    <p className={'mb-0'}>
                        Email:
                        <span className={'h6 fw-light ms-2'}>example@gmail.com</span>
                    </p>
                    <Row className={'g-2 mt-2'}>
                        <Col sm={4} md={3} lg={6} className={'col-6'}>
                            <Link to='#'>
                                <img src={'./images/google-play.svg'} alt={'google-pay'} />
                            </Link>
                        </Col>
                        <Col sm={4} md={3} lg={6} className={'col-6'}>
                            <Link to='#'>
                                <img src={'./images/app-store.svg'} alt={'app-store'} />
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className={'mt-4 mb-0'} />
            <div className={'py-3'}>
                <Container className={'px-0'}>
                    <div className={'d-lg-flex justify-content-between align-items-center py-3 text-center'}>
                        <div className={'text-primary-hover'}>
                            Copyrights&nbsp;
                            <Link to='#' className={'text-decoration-none'}>&#169;2022 YourEducation</Link>
                            . All rights reserved.
                        </div>
                        <div>
                            <ChangeTheme />
                        </div>
                        <div className={'justify-content-center mt-3 mt-lg-0'}>
                            <Nav as={'ul'} className={'list-inline justify-content-center mb-0'}>
                                <li className={'list-inline-item'}>
                                    <Dropdown drop={'up'}>
                                        <Dropdown.Toggle className={'nav-link'} id={'languageSwicher'}>
                                            <Globe className={'me-2'} />
                                            Language
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as={'ul'} className={'min-w-auto'}>
                                            <Dropdown.Item as={'li'} href='/' className={'me-4 nav-link cursor-pointer'}>
                                                <img className={'fa-fw me-2'} src={'./images/Flag_of_UK.svg'} alt={'flag of UK'} />
                                                English
                                            </Dropdown.Item>
                                            <Dropdown.Item as={'li'} href='/' className={'me-4 nav-link cursor-pointer'}>
                                                <img className={'fa-fw me-2'} src={'./images/Flag_of_Ukraine.svg'} alt={'flag of Ukraine'} />
                                                Ukrainian
                                            </Dropdown.Item>
                                            <Dropdown.Item as={'li'} href='/' className={'me-4 nav-link cursor-pointer'}>
                                                <img className={'fa-fw me-2'} src={'./images/Flag_of_GR.svg'} alt={'flag of GR'} />
                                                German
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>    
                                </li>
                                <li className={'list-inline-item'}>
                                    <Link to='#' className={'nav-link'}>Terms of use</Link>
                                </li>
                                <li className={'list-inline-item'}>
                                    <Link to='#' className={'nav-link'}>Privacy policy</Link>
                                </li>
                            </Nav>
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    </footer>
}

export default Footer;