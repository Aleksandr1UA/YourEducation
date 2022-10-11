import { useState } from 'react';
import { Container, Row, Col, Card, Button, Offcanvas, ListGroup } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { Basket, BookFill, BoxArrowRight, Facebook, FolderCheck, Gear, GraphUp, Instagram, Linkedin, MortarboardFill, PatchCheckFill, PencilSquare, People, Person, QuestionDiamond, Sliders2, Star, StarFill, Trash, Twitter, UiChecksGrid, Wallet2 } from 'react-bootstrap-icons';

function ProfileInstructor() {

    const lists = [
        {
            link: 'instructor-dashboard',
            icon: <UiChecksGrid className={'fa-fw me-2'} />,
            nameLink: 'Dashboard',
            linkActive: 'bg-white text-dark'
        },
        {
            link: 'instructor-manage-course',
            icon: <Basket className={'fa-fw me-2'} />,
            nameLink: 'My Course',
            linkActive: ''
        },
        {
            link: 'instructor-quiz',
            icon: <QuestionDiamond className={'fa-fw me-2'} />,
            nameLink: 'Quiz',
            linkActive: ''
        },
        {
            link: 'instructor-earning',
            icon: <GraphUp className={'fa-fw me-2'} />,
            nameLink: 'Earnings',
            linkActive: ''
        },
        {
            link: 'instructor-studentlist',
            icon: <People className={'fa-fw me-2'} />,
            nameLink: 'Students',
            linkActive: ''
        },
        {
            link: 'instructor-order',
            icon: <FolderCheck className={'fa-fw me-2'} />,
            nameLink: 'Orders',
            linkActive: ''
        },
        {
            link: 'instructor-review',
            icon: <Star className={'fa-fw me-2'} />,
            nameLink: 'Reviews',
            linkActive: ''
        },
        {
            link: 'instructor-edit-profile',
            icon: <PencilSquare className={'fa-fw me-2'} />,
            nameLink: 'Edit Profile',
            linkActive: ''
        },
        {
            link: 'instructor-payout',
            icon: <Wallet2 className={'fa-fw me-2'} />,
            nameLink: 'Payouts',
            linkActive: ''
        },
        {
            link: 'instructor-settings',
            icon: <Gear className={'fa-fw me-2'} />,
            nameLink: 'Settings',
            linkActive: ''
        },
        {
            link: 'instructor-delete-account',
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
                    <div className={'d-flex justify-content-center align-items-center rounded-0 top-instructor-banner'}>
                        <h2 className={'text-white h2'}>Instructor Account</h2>
                    </div>
                </Container>
                <Container className={'mt-2'}>
                    <Row>
                        <Col className={'col-12'}>
                            <Card className={'bg-transparent position-static card-body p-0'}>
                                <Row className={'justify-content-between'}>
                                    <Col className={'col-auto mt-4 mt-md-0'}>
                                        <div className={'avatar-xxl d-inline-block mt-4'}>
                                            {/*<img className={'avatar-img rounded-circle border border-white border-3 shadow'} 
                                                src={''} alt={'avatar instructor'} />*/}
                                            <Person className={'avatar-img text-orange rounded-circle border border-white border-3 shadow'} />
                                        </div>
                                    </Col>
                                    <Col className={'d-md-flex justify-content-between align-items-center mt-4'}>
                                        <div>
                                            <h1 className={'my-1 fs-4'}>Lori Stevens
                                                <PatchCheckFill className={'text-info small'} />
                                            </h1>
                                            <ul className={'list-inline mb-0'}>
                                                <li className={'list-inline-item h6 fw-light me-3 mb-1 mb-sm-0'}>
                                                    <StarFill className={'text-warning me-2'} />4.5/5.0
                                                </li>
                                                <li className={'list-inline-item h6 fw-light me-3 mb-1 mb-sm-0'}>
                                                    <MortarboardFill className={'text-orange me-2'} />
                                                    12k Enrolled Students
                                                </li>
                                                <li className={'list-inline-item h6 fw-light me-3 mb-1 mb-sm-0'}>
                                                    <BookFill className={'text-purple me-2'} />25 Courses
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={'d-flex align-items-center mt-2 mt-md-0'}>
                                            <Link to={'/instructor-create-course'} className={'btn btn-success mb-0'}>Create a course</Link>
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

export default ProfileInstructor;