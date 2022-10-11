import './MainCourse.css';
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useState } from 'react';
import TabContent from './static-main/TabContent';
import WebDesign from './static-main/WebDesign';
import Development from './static-main/Development';
import GraphicDesign from './static-main/GraphicDesign';
import Marketing from './static-main/Marketing';
import Finance from './static-main/Finance';
import { HandIndex } from 'react-bootstrap-icons';

function MainCourse() {

    const [active, setActive] = useState();

    const items = [
        {title: 'Web Design', val: 1, content: <WebDesign />},
        {title: 'Development', val: 2, content: <Development />},
        {title: 'Graphic Design', val: 3, content: <GraphicDesign />},
        {title: 'Marketing', val: 4, content: <Marketing />},
        {title: 'Finance', val: 5, content: <Finance />}
    ];

    const openTab = e => setActive(+e.target.dataset.index);
    
    return <section>
            <Container>
                <Row className={'mb-4'}>
                    <Col lg={8} className={'mx-auto text-center'}>
                        <h2 className={'fs-1'}>Most Popular Courses</h2>
                        <p className={'mb-0'}>Choose from hundreds of courses from specialist organizations</p>
                    </Col>
                </Row>
                <Nav as={'ul'} variant={'pills'} className={'nav-pills-bg justify-content-sm-around mb-4 px-3'} 
                    defaultActiveKey={1}>
                {
                    items.map((item, i) => <Nav.Item as={'li'} key={i} className={'d-flex me-2 me-sm-5'}>
                        <Nav.Link className={`${i === active ? 'active' : ''} mb-2 mb-md-0`}
                            type={'button'}
                            onClick={openTab}
                            eventKey={item.val}
                            data-index={i}><HandIndex className={'handindex'} /> {item.title}</Nav.Link>
                    
                    </Nav.Item> )
                }   
                </Nav>
                {items[active] && <TabContent {...items[active]} /> }
            </Container>
        </section>
    
}

export default MainCourse;