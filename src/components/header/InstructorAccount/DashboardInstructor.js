import '../../../scss/custom.scss';
import { Badge, Card, Col, Nav, Pagination, Row } from "react-bootstrap";
import { ArrowDown, ArrowUp, Gem, MortarboardFill, Tv} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TableSellingCourses from '../Registration/TableSellingCourses.js';
import ChartGraph from '../Registration/ChartGraph';

function DashboardInstructor() {
    
    const topCount = {
            countCurses: 25,
            countStudents: 25,
            countEnrStdents: 12
    };
    
    const [countCurses, setCountCurses] = useState(0);
    const [countStudents, setCountStudents] = useState(0);
    const [countEnrStdents, setCountEnrStudents] = useState(0);

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
        
    }, [topCount.countCurses, countCurses]);

    useEffect(() => {
        const num = topCount.countStudents;

        if(countStudents < 0) {return;}

        const step = Math.round(10000 / num);

        const id = setTimeout(() =>{
            setCountStudents((countStudents) => countStudents + 1);
        }, step);

        if (countStudents === num) {
            console.log('>>::', countStudents === num);
            clearTimeout(id);
        }
        
    }, [topCount.countStudents, countStudents]);

    useEffect(() => {
        const num = topCount.countEnrStdents;

        if(countEnrStdents < 0) {return;}

        const step = Math.round(10000 / num);

        const id = setTimeout(() =>{
            setCountEnrStudents((countEnrStdents) => countEnrStdents + 1);
        }, step);

        if (countEnrStdents === num) {
            console.log('>>::', countEnrStdents === num);
            clearTimeout(id);
        }
        
    }, [topCount.countEnrStdents, countEnrStdents]);

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
                        <MortarboardFill className={'fa-fw display-4'} />
                    </span>
                    <div className={'ms-4'}>
                        <div className={'d-flex'}>
                            <h5 className={'mb-0 fw-bold'}>{countStudents}K+</h5>
                        </div>
                        <span className={'mb-0 h6 fw-light'}>Total Students</span>
                    </div>
                </div>
            </Col>
            <Col sm={6} lg={4}>
                <div className={`d-flex justify-content-center align-items-center p-4 rounded-3 bg-cyan-2`}>
                    <span className={`mb-0 text-info`}>
                        <Gem className={'fa-fw display-4'} />
                    </span>
                    <div className={'ms-4'}>
                        <div className={'d-flex'}>
                            <h5 className={'mb-0 fw-bold'}>{countEnrStdents}K</h5>
                        </div>
                        <span className={'mb-0 h6 fw-light'}>Enrolled Students</span>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className={'mt-5'}>
            <Col className={'col-12'}>
                <Card className={'card-body bg-transparent border p-4 h-100'}>
                    <Row className={'g-4'}>
                        <Col sm={6} md={4}>
                            <Badge className={'text-white bg-dark'}>Current Month</Badge>
                            <h4 className={'text-primary my-2'}>$35000</h4>
                            <p className={'mb-0'}>
                                <span className={'text-success me-1'}>0.20%
                                    <ArrowUp />
                                </span>
                                vs last month
                            </p>
                        </Col>
                        <Col sm={6} md={4}>
                            <Badge className={'text-white bg-dark'}>Last Month</Badge>
                            <h4 className={'my-2'}>$28000</h4>
                            <p className={'mb-0'}>
                                <span className={'text-danger me-1'}>0.10%
                                    <ArrowDown />
                                </span>
                                Then last month
                            </p>
                        </Col>
                    </Row>
                    {/* Chart */}
                    <div>
                        <ChartGraph />
                    </div>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col className={'col-12'}>
                <Card className={'border bg-transparent rounded-3 mt-5'}>
                    <Card.Header className={'bg-transparent border-bottom'}>
                        <div className={'d-sm-flex justify-content-sm-between align-items-center'}>
                            <h3 className={'mb-2 mb-sm-0'}>Most Selling Courses</h3>
                            <Link to='/#' className={'btn btn-sm btn-primary mb-0'}>View all</Link>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className={'table-responsive border-0 rounded-3'}>
                            <TableSellingCourses />
                        </div>
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
            </Col>
        </Row>
    </>
}

export default DashboardInstructor;