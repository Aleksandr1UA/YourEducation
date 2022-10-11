import './header/Header.css';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchHeader from './header/SearchHeader';
import SignUp from './header/Registration/SignUp';
import AccountInstructor from './header/Accounts/AccountInstructor';

function Header() {

    return <header className={'navbar-light navbar-sticky header-static'}>
        <Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
            <Container className={'px-3 px-xl-5 py-xl-2'} fluid>
                {/* Registaration */}
                <Dropdown className={'me-0 me-xl-5'}>
                    <SignUp />
                </Dropdown>
                <Navbar.Brand>
                    <Link className={'text-white fw-bold text-decoration-none me-3 border p-3'} to='/'>
                        Logo Education
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle className={'ms-0 ms-xl-auto'} aria-controls="navbarCollapse" />
                <Navbar.Collapse className={'w-100 collapse'} id="navbarCollapse">
                    <Nav as={'ul'} className={'navbar-nav-scroll me-auto align-items-xl-center'}>
                        {/* Video Library */}
                        <Dropdown className={'list__item mt-3 mb-2 my-xl-0 list_selection'}>                
                            <Link className={'text-white text-uppercase text-decoration-none dropdown-btn'}>
                                video library
                            </Link> 
                            <div className={'list__item_selection dropdown-menu'}>
                                <Link className={'selection_item'} to='/all-video'>All video</Link>
                                <div className={'selection_menu'}>                                   
                                   <Link className={'selection_item selection_item_tab list_selection'} 
                                        to='/school-program'>
                                        School Program 
                                        <FontAwesomeIcon className={'icon_item'} icon={faEllipsisH} />
                                    </Link>                                  
                                    <div className={'list__item_submenu'}>
                                        <Link className={'selection_item text-capitalize'} to='/school-subjects'>
                                            subjects
                                        </Link>
                                        <Link className={'selection_item text-capitalize'} to='/school-classes'>
                                            classes
                                        </Link>
                                        <Link className={'selection_item text-capitalize'} to='/additional-materials'>
                                            additional materials
                                        </Link>
                                        <Link className={'selection_item text-capitalize'} to='/school-subscription'>
                                            subscription
                                        </Link>
                                    </div>
                                </div>                        
                                <Link className={'selection_item selection_item_tab'} to='/academy-program'>
                                    Academy Program 
                                    <FontAwesomeIcon className={'icon_item'} icon={faEllipsisH} />
                                </Link>
                                <Link className={'selection_item selection_item_tab'} to='/university-program'>
                                    University Program 
                                    <FontAwesomeIcon className={'icon_item'} icon={faEllipsisH} />
                                </Link>
                                <Link className={'selection_item selection_item_tab'} to='/online-courses'>
                                    Online Courses 
                                    <FontAwesomeIcon className={'icon_item'} icon={faEllipsisH} />
                                </Link>
                                <Link className={'selection_item'} to='/educational-videos'>Educational Videos</Link>
                            </div>
                        </Dropdown>
                        {/* Education Center */}
                        <Dropdown className={'list__item mt-3 mb-2 my-xl-0 list_selection'}>
                            <Link className={'text-white text-uppercase text-decoration-none'}>education center</Link>
                            <div className={'list__item_selection dropdown-menu me-3'}>
                                <Link className={'selection_item'} to='/online-school'>Online School</Link>
                                <Link className={'selection_item'} to='/online-course'>Online Course</Link>
                                <Link className={'selection_item'} to='/online-education'>Online Education</Link>
                                <Link className={'selection_item'} to='/online-academy'>Online Academy</Link>
                                <Link className={'selection_item'} to='/online-university'>Online University</Link>
                            </div>
                        </Dropdown>
                        {/* About Us */}
                        <Dropdown className={'list__item mt-3 mb-2 my-xl-0 list_selection'}>
                            <Link className={'text-white text-uppercase text-decoration-none'}>about us</Link>
                            <div className={'list__item_selection dropdown-menu me-3'}>
                                <Link className={'selection_item text-capitalize'} to='/your-education'>
                                    your education
                                </Link>
                                <Link className={'selection_item text-capitalize'} to='/our-philosophy'>
                                    Our philosophy
                                </Link>
                                <Link className={'selection_item text-capitalize'} to='/leadership'>
                                    leadership
                                </Link>
                                <Link className={'selection_item text-capitalize'} to='/cooperation'>
                                    cooperation
                                </Link>
                            </div>
                        </Dropdown>
                        {/* Online Shop */}
                        <Dropdown className={'list__item mt-3 mb-2 my-xl-0 py-1'}>
                            <Link className={'text-white text-uppercase text-decoration-none'} to='/online-shop'>
                                Shop
                            </Link>
                        </Dropdown>
                        <div className={'d-flex align-items-center justify-content-between'}>
                            {/* Search */}
                            <Dropdown>
                                <SearchHeader />
                            </Dropdown>
                            {/* Accounts */}
                            <Dropdown className={'d-flex ms-0 ms-xl-5 me-0 me-xl-4 mt-3 mb-2 my-xl-0 list__item list_selection'}>
                                <Link className={'text-white text-uppercase text-decoration-none'}>accounts</Link>
                                <div className={'list__item_selection dropdown-menu m-2 m-xl-0 me-xl-3 me-0 w-auto'}>
                                    <AccountInstructor />
                                    <Link className={'selection_item text-capitalize'} to='/account-student'>
                                        student
                                    </Link>
                                    <Link className={'selection_item text-capitalize'} to='/account-admin'>
                                        admin
                                    </Link>
                                </div>
                            </Dropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}

export default Header;