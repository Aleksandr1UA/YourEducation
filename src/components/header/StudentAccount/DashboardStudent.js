import '../../../scss/custom.scss';
import './DashboardStudent.css';
import { Badge, Button, Card, Col, Form, Nav, Pagination, Row } from "react-bootstrap";
import { ArrowDown, ArrowUp, Clipboard2CheckFill, Gem, MortarboardFill, Search, Tv} from 'react-bootstrap-icons';
import { Link, useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import TableCoursesList from './TableCoursesList';

function DashboardStudent({coursesList}) {
    const topCount = {
        countCurses: 9,
        countLessons: 52,
        countCertificates: 8
    };

    const [countCurses, setCountCurses] = useState(0);
    const [countLessons, setCountLessons] = useState(0);
    const [countCertificates, setCountCertificates] = useState(0);

    useEffect(() => {
        const num = topCount.countCurses;

        if(countCurses < 0) {return;}

        const step = Math.round(10000 / num);

        const id = setTimeout(() =>{
            setCountCurses((countCurses) => countCurses + 1);
        }, step);

        if (countCurses === num) {
            console.log('>>::', countCurses === num);
            clearTimeout(id);
        }
        
    }, [countCurses]);

    useEffect(() => {
        const num = topCount.countLessons;

        if(countLessons < 0) {return;}

        const step = Math.round(10000 / num);

        const id = setTimeout(() =>{
            setCountLessons((countLessons) => countLessons + 1);
        }, step);

        if (countLessons === num) {
            console.log('>>::', countLessons === num);
            clearTimeout(id);
        }
        
    }, [countLessons]);

    useEffect(() => {
        const num = topCount.countCertificates;

        if(countCertificates < 0) {return;}

        const step = Math.round(10000 / num);

        const id = setTimeout(() =>{
            setCountCertificates((countCertificates) => countCertificates + 1);
        }, step);

        if (countCertificates === num) {
            console.log('>>::', countCertificates === num);
            clearTimeout(id);
        }
        
    }, [countCertificates]);

    return <>
        <Row className={'g-4'}>
            <Col sm={6} lg={4}>
                <div className={`d-flex justify-content-center align-items-center p-4 rounded-3 bg-warning-2`}>
                    <span className={`mb-0 text-warning`}>
                        <Tv className={'fa-fw display-4'} />
                    </span>
                    <div className={'ms-4'}>
                        <div className={'d-flex'}>
                            <h5 className={'mb-0 fw-bold'}>{countCurses}</h5>
                        </div>
                        <span className={'mb-0 h6 fw-light'}>Total Courses</span>
                    </div>
                </div>
            </Col>
            <Col sm={6} lg={4}>
                <div className={`d-flex justify-content-center align-items-center p-4 rounded-3 bg-purple-2`}>
                    <span className={`mb-0 text-purple`}>
                        <Clipboard2CheckFill className={'fa-fw display-4'} />
                    </span>
                    <div className={'ms-4'}>
                        <div className={'d-flex'}>
                            <h5 className={'mb-0 fw-bold'}>{countLessons}</h5>
                        </div>
                        <span className={'mb-0 h6 fw-light'}>Complete lessons</span>
                    </div>
                </div>
            </Col>
            <Col sm={6} lg={4}>
                <div className={`d-flex justify-content-center align-items-center p-4 rounded-3 bg-cyan-2`}>
                    <span className={`mb-0 text-success`}>
                        <FontAwesomeIcon icon={faMedal} className={'display-4'} />
                    </span>
                    <div className={'ms-4'}>
                        <div className={'d-flex'}>
                            <h5 className={'mb-0 fw-bold'}>{countCertificates}</h5>
                        </div>
                        <span className={'mb-0 h6 fw-light'}>Achieved Certificates</span>
                    </div>
                </div>
            </Col>
        </Row>
        <Card className={'border bg-transparent rounded-3'}>
            <Card.Header className={'bg-transparent border-bottom'}>
                <div className={'d-sm-flex justify-content-sm-between align-items-center'}>
                    <h3 className={'mb-0 fw-bold'}>My Courses List</h3>
                </div>
            </Card.Header>
            <Card.Body>
                <TableCoursesList />
                <div className={'d-sm-flex justify-content-sm-between align-items-sm-center mt-3'}>
                    <p className={'mb-0 text-center text-sm-start'}>Showing 1 to 8 of 20 entries</p>
                    <Nav className={'d-flex justify-content-center mb-0'}>
                        <Pagination className={'pagination-sm d-inline-block d-flex rounded mb-0'}>
                            <Pagination.Prev className={'mb-0 m-1'} href='#' />
                            <Pagination.Item className={'mb-0 m-1'} href='#'>1</Pagination.Item>
                            <Pagination.Item className={'mb-0 m-1'} href='#' active>2</Pagination.Item>
                            <Pagination.Item className={'mb-0 m-1'} href='#'>3</Pagination.Item>
                            <Pagination.Next className={'mb-0 m-1'} href='#' />
                        </Pagination>
                    </Nav>
                </div>
            </Card.Body>
        </Card>
    </>
}

export default DashboardStudent;