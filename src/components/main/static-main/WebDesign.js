import '../../../scss/custom.scss'
import { useState, useEffect } from 'react';
import { Col, Card } from 'react-bootstrap';
import { Clock, Heart, Table } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import StarRating from '../../StarRating/StarRating';

function WebDesign() {
    
    const [webCourses, setWebCourse] = useState([]);

    useEffect(() => {
        setWebCourse(
        [{
            id: 1,
            img: './images/web_design.jpeg',
            alt: 'sketch',
            level: 'All level',
            courseName: ' Sketch from A to Z: for app designer',
            descriction: 'Proposal indulged no do sociable he throwing settings',
            rate: 4,
            time: '12h 56m',
            quantity: '15 lectures'
        },
        {
            id: 2,
            img: './images/development.jpeg',
            alt: 'graphic design',
            level: 'Beginner',
            courseName: 'Graphic Design Masterclass',
            descriction: 'Rooms oh fully taken by worse do Points afraid but may end...',
            rate: 4,
            time: '9h 56m',
            quantity: '65 lectures'
        },
        {
            id: 3,
            img: './images/design_figma.jpeg',
            alt: 'create a design',
            level: 'Beginner',
            courseName: 'Create a Design System in Figma',
            descriction: 'Rooms oh fully taken by worse do. Points afraid but may end...',
            rate: 4,
            time: '5h 56m',
            quantity: '32 lectures'
        },
        {
            id: 4,
            img: './images/react_native.jpeg',
            alt: 'react native',
            level: 'Beginner',
            courseName: 'Deep Learning with React-Native',
            descriction: 'Far advenced setting say finished raillery. Offered chiefly',
            rate: 4,
            time: '18h 56m',
            quantity: '99 lectures'
        },
        {
            id: 5,
            img: './images/websites_html.jpeg',
            alt: 'websites with HTML',
            level: 'All level',
            courseName: 'Build Responsive Websites with HTML',
            descriction: 'Far advenced setting say finished raillery. Offered chiefly',
            rate: 4,
            time: '15h 30m',
            quantity: '68 lectures'
        },
        {
            id: 6,
            img: './images/websites_css.jpeg',
            alt: 'websites with CSS',
            level: 'Beginner',
            courseName: 'Build Websites with CSS',
            descriction: 'Far advenced setting say finished raillery. Offered chiefly',
            rate: 4,
            time: '36h 30m',
            quantity: '72 lectures'
        },
        {
            id: 7,
            img: './images/learn_invision.jpeg',
            alt: 'learn invision',
            level: 'All level',
            courseName: 'Learn Invision',
            descriction: 'Arrived off she elderly beloved him Course regard to up he hardly.',
            rate: 3,
            time: '6h 56m',
            quantity: '82 lectures'
        },
        {
            id: 8,
            img: './images/javascript_full.jpeg',
            alt: 'javascript full',
            level: 'All level',
            courseName: 'JavaScript: Full Understanding',
            descriction: 'Far advanced settings say finished raillery. Offered chiefly',
            rate: 5,
            time: '35h 20m',
            quantity: '89 lectures'
        }
        ])
    }, []);
    
    return <>
    { 
        webCourses.map(el => <Col key={el.id} sm={6} lg={4} xl={3}>
        <Card  className={'shadow h-100'}>
        <Card.Img variant={'top'} src={el.img} alt={el.alt} />
        <Card.Body className={'pb-0'}>
            <div className={'d-flex justify-content-between mb-2'}>
                <Link to={'/all-level'}>
                    <span className={`${el.level === 'All level' ? 'badge-purple' : 'badge-teal'}`}>
                        {el.level}
                    </span>
                </Link>
                <Link to={'/course-heart'}><Heart /></Link>
            </div>
            <Card.Title className={''}>
                <Link className={'h5 fw-normal text-decoration-none a:hover'} 
                        to={`/${el.courseName.trim().slice(0, 10).replace(/\s/g, '-').toLowerCase()}`}>
                    {el.courseName}
                </Link>
            </Card.Title>
            <p className={'mb-1 text-truncate-2'}>{el.descriction}</p>
            <div className={'d-flex mt-3'}>
                <StarRating numTotalStars={'5'} initialRating={el.rate} />
                <div className={'ms-2 h6 fw-light mb-0'}>{el.rate.toFixed(1)}/5.0</div>
            </div>
        </Card.Body>
        <Card.Footer className={'py-3'}>
            <div className={'d-flex justify-content-between'}>
                <span className={'h6 fw-light mb-0'}>
                    <Clock className={'text-danger me-2'} />
                    {el.time}
                </span>
                <span className={'h6 fw-light mb-0'}>
                    <Table className={'text-orange me-2'} />
                    {el.quantity}
                </span>
            </div>
        </Card.Footer>
    </Card> 
    </Col>)
    }
    </>
}

export default WebDesign;