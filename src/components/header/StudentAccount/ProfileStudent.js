import { useState } from 'react';
import { Container, Row, Col, Card, Button, Offcanvas, ListGroup, Badge } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { Basket, BoxArrowRight, CardChecklist, CartCheck, CreditCard2Front, Facebook, FileEarmarkText, Gear, Instagram, Linkedin, PencilSquare, Person, QuestionDiamond, Sliders2, Trash, Twitter, UiChecksGrid } from 'react-bootstrap-icons';

function ProfileStudent() {

    const lists = [
        {
            link: 'student-dashboard',
            icon: <UiChecksGrid className={'fa-fw me-2'} />,
            nameLink: 'Dashboard',
            linkActive: 'bg-white text-dark'
        },
        {
            link: 'student-subscription',
            icon: <CardChecklist className={'fa-fw me-2'} />,
            nameLink: 'My Subscriptions',
            linkActive: ''
        },
        {
            link: 'student-course',
            icon: <Basket className={'fa-fw me-2'} />,
            nameLink: 'My Courses',
            linkActive: ''
        },
        {
            link: 'student-course-resume',
            icon: <FileEarmarkText className={'fa-fw me-2'} />,
            nameLink: 'Course Resume',
            linkActive: ''
        },
        {
            link: 'student-quiz',
            icon: <QuestionDiamond className={'fa-fw me-2'} />,
            nameLink: 'Quiz',
            linkActive: ''
        },
        {
            link: 'student-payment-info',
            icon: <CreditCard2Front className={'fa-fw me-2'} />,
            nameLink: 'Payment info',
            linkActive: ''
        },
        {
            link: 'student-bookmark',
            icon: <CartCheck className={'fa-fw me-2'} />,
            nameLink: 'Wishlist',
            linkActive: ''
        },
        {
            link: 'student-edit-profile',
            icon: <PencilSquare className={'fa-fw me-2'} />,
            nameLink: 'Edit Profile',
            linkActive: ''
        },
        {
            link: 'student-settings',
            icon: <Gear className={'fa-fw me-2'} />,
            nameLink: 'Settings',
            linkActive: ''
        },
        {
            link: 'student-delete-account',
            icon: <Trash className={'fa-fw me-2'} />,
            nameLink: 'Delete Profile',
            linkActive: ''
        }
    ];

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
        <main>
            <section className={'pt-0'}>
                <Container className={'px-0 my-2'} fluid>
                    <div className={'d-flex rounded-0 justify-content-center align-items-center top-instructor-banner'}>
                        <h2 className={'text-white h2'}>Student Account</h2>
                    </div>
                </Container>
                <Container className={'mt-2'}>
                    <Row>
                        <Col className={'col-12'}>
                            <Card className={'bg-transparent card-body pb-0 px-0 mt-2 mt-sm-0'}>
                                <Row className={'d-sm-flex justify-content-sm-between mt-2 mt-md-0'}>
                                    <Col className={'col-auto'}>
                                        <div className={'avatar-xxl position-relative mt-n3'}>
                                            {/*<img className={'avatar-img rounded-circle border border-white border-3 shadow'} 
                                                src={''} alt={'avatar instructor'} />*/}
                                            <Person className={'avatar-img text-orange rounded-circle border border-white border-3 shadow'} />
                                            <Badge className={'student-badge text-bg-success rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3'}>Pro</Badge>
                                        </div>
                                    </Col>
                                    <Col className={'d-md-flex justify-content-between align-items-center'}>
                                        <div>
                                            <h1 className={'my-1 fs-4 fw-bold'}>Lori Stevens</h1>
                                            <ul className={'list-inline mb-0'}>
                                                <li className={'list-inline-item h6 fw-light me-3 mb-1 mb-sm-0'}>
                                                    <span className={'h6 fw-bold'}>255 </span>
                                                    <span className={'text-body fw-light'}>points</span>
                                                </li>
                                                <li className={'list-inline-item h6 fw-light me-3 mb-1 mb-sm-0'}>
                                                    <span className={'h6 fw-bold'}>7 </span>
                                                    <span className={'text-body fw-light'}>Completed courses</span>
                                                </li>
                                                <li className={'list-inline-item h6 fw-light me-3 mb-1 mb-sm-0'}>
                                                    <span className={'h6 fw-bold'}>52 </span>
                                                    <span className={'text-body fw-light'}>Completed lessons</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={'mt-2 mt-sm-0'}>
                                            <Link to={'student-create-course'} className={'btn btn-outline-primary mb-0'}>View my courses</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <hr className={'d-xl-none'} />
                            <Col xl={3} className={'col-12 d-flex justify-content-between align-items-center'}>
                                <Link className={'h6 mb-0 fw-bold d-xl-none'} to='/#'>Menu</Link>
                                <Button variant={'primary'} className={'d-xl-none'} onClick={handleShow} >
                                    <Sliders2 />
                                </Button>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={'pt-3'}>
                <Container>
                    <Row>
                        <Col xl={3}>
                            <Offcanvas show={show} onHide={handleClose} responsive={'xl'} placement={'end'} tabIndex={'-1'}>
                                <Offcanvas.Header className={'bg-light'} closeButton>
                                    <Offcanvas.Title className={'h5'}>My Profile</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className={'p-3 p-xl-0'}>
                                    <div className={'bg-dark border rounded-3 pb-0 p-3 w-100'}>
                                        <ListGroup className={'list-group-dark list-group-borderless'}>
                                        { lists.map((list, i) => 
                                            <Link to={list.link} 
                                                className={`list-group-item ${list.linkActive}`}  key={i}>
                                                {list.icon}{list.nameLink}
                                            </Link>)
                                        }
                                            <Link to='/sign-in' className={'list-group-item text-danger bg-danger-soft-hover'}>
                                                <BoxArrowRight className={'fa-fw me-2'} />Sign Out
                                            </Link>
                                        </ListGroup>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Col>
                        <Col xl={9}>
                            <Outlet />
                        </Col>  
                    </Row>
                </Container>
            </section>
        </main>
        <footer className={'bg-dark p-3'}>
            <Container>
                <Row className={'align-items-center'}>
                    <Col md={4} className={'text-center text-md-start mb-3 mb-md-0'}>
                        <Link to={'/#'} className={'text-white h3'}>LOGO</Link>
                    </Col>
                    <Col md={4} className={'mb-3 mb-md-0'}>
                        <div className={'text-center text-white'}>
                            Copyrights 2022 YourEducation. All rights reserved.
                        </div>
                    </Col>
                    <Col md={4}>
                        <ListGroup className={'mb-0 text-center text-md-end'} horizontal>
                            <ListGroup.Item className={'ms-2 bg-dark'}>
                                <Link to={'/#'} className={'text-white'}><Facebook /></Link>
                            </ListGroup.Item>
                            <ListGroup.Item className={'ms-2 bg-dark'}>
                                <Link to={'/#'} className={'text-white'}><Instagram /></Link>
                            </ListGroup.Item>
                            <ListGroup.Item className={'ms-2 bg-dark'}>
                                <Link to={'/#'} className={'text-white'}><Linkedin /></Link>
                            </ListGroup.Item>
                            <ListGroup.Item className={'ms-2 bg-dark'}>
                                <Link to={'/#'} className={'text-white'}><Twitter /></Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
}

export default ProfileStudent;