import '../../../scss/custom.scss';
import { Button, Col, Form, ProgressBar, Row, Table } from "react-bootstrap";
import { ArrowRepeat, Check, PlayCircle, Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function TableCoursesList() {
    const [coursesList] = useState([
        {
            courseImg: '../images/web_design.jpeg',
            courseImgAlt: 'GraphQL',
            courseName: 'Building Scalable APIs with GraphQL',
            totalLectures: 56,
            completedLecture: 40,
            actionBtn: <Link to='' className={'btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0'}>
                            <PlayCircle className={'me-1'} />
                            Continue
                        </Link> 
        },
        {
            courseImg: '../images/websites_bootstrap.jpeg',
            courseImgAlt: 'Bootstrap 5',
            courseName: 'Bootstrap 5 From Scratch',
            totalLectures: 42,
            completedLecture: 42,
            actionBtn: <>
                            <Button className={'btn btn-sm btn-success me-1 mb-1'} disabled>
                                <Check className={'me-1'} />
                                Complete
                            </Button>
                            <Link to='' className={'btn btn-sm btn-secondary me-1 mb-1'}>
                                <ArrowRepeat className={'me-1'} />
                                Restart
                            </Link>
                        </>
        },
        {
            courseImg: '../images/websites_photoshop.jpeg',
            courseImgAlt: 'Graphic Design',
            courseName: 'Graphic Design Masterclass',
            totalLectures: 28,
            completedLecture: 12,
            actionBtn: <Link to='' className={'btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0'}>
                            <PlayCircle className={'me-1'} />
                            Continue
                        </Link>
        },
        {
            courseImg: '../images/learn_invision.jpeg',
            courseImgAlt: 'Invision',
            courseName: 'Learn Invision',
            totalLectures: 32,
            completedLecture: 18,
            actionBtn: <Link to='' className={'btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0'}>
                            <PlayCircle className={'me-1'} />
                            Continue
                        </Link>
        },
        {
            courseImg: '../images/angular.jpeg',
            courseImgAlt: 'Angular',
            courseName: 'Angular - The Complete Guider',
            totalLectures: 16,
            completedLecture: 14,
            actionBtn: <Link to='' className={'btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0'}>
                            <PlayCircle className={'me-1'} />
                            Continue
                        </Link>
        }
    ]);

    const [searchValue, setSearchValue] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);

    const search = (e) => {
        let value = e.target.value.toLowerCase().trim();
        setSearchValue(value);
        setFilteredCourses(coursesList.filter(course => course.courseName.toLowerCase().includes(value)));
    }    
    
    return <>
        <Row className={'g-3 align-items-center justify-content-between mb-4'}>
            <Col md={8}>
                <Form className={'rounded position-relative'}>
                    <Form.Control className={'pe-5 bg-transparent'} type={'search'} 
                        placeholder={'Search'} aria-label={'Search'} onKeyUp={search} />
                        {searchValue && !filteredCourses.length ? <div className={'text-center position-absolute start-50'}>Not found</div> : ''}
                    <div className={'bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y  border-0 text-primary-hover text-reset'}>
                        <Search className={'fs-6'} />
                    </div>
                </Form>
                
            </Col>
            <Col md={3}>
                <Form>
                    <Form.Select size={'sm'} aria-label={'Sort by'}>
                        <option>Sort by</option>
                        <option value={'free'}>Free</option>
                        <option value={'most popular'}>Most popular</option>
                        <option value={'most viewed'}>Most Viewed</option>
                        <option value={'newest'}>Newest</option>
                    </Form.Select>
                </Form>
            </Col>
        </Row>
        <div className={'table-responsive border-0 rounded-3'}>
            <Table className={'align-middle p-4 mb-0 table-hover'}>
                <thead className={'table-dark'}>
                    <tr>
                        <th scope={'col'} className={'border-0 rounded-start'}>Course title</th>
                        <th scope={'col'} className={'border-0'}>Total Lectures</th>
                        <th scope={'col'} className={'border-0'}>Complete Lecture</th>
                        <th scope={'col'} className={'border-0'}>Action</th>
                    </tr>
                </thead>
                <tbody>
                { coursesList.map((course, i) => 
                    <tr key={i}>
                        <td>
                            <div className={'d-flex align-items-center'}>
                                <div>
                                    <img src={course.courseImg} className={'rounded'} style={{width: '3.75rem'}} 
                                        alt={course.courseImgAlt} />
                                </div>
                                <div className={'mb-0 ms-2'}>
                                    <Link to={'/#'} className={'h6 text-decoration-none text-dark fw-bold link-primary'}>
                                        {course.courseName}
                                    </Link>
                                    <div className={'overflow-hidden'} key={i}>
                                        <h6 className={'mb-0 text-end'}>
                                            {Math.round((course.completedLecture / course.totalLectures) * 100)}%
                                        </h6>
                                        <ProgressBar now={Math.round((course.completedLecture / course.totalLectures) * 100)} 
                                            className={'progress-sm'} />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className={'text-center'}>{course.totalLectures}</td>
                        <td className={'text-center'}>{course.completedLecture}</td>
                        <td>
                            {course.actionBtn}
                        </td>
                    </tr>)
                }
                </tbody>
            </Table>
        </div>
    </>
}

export default TableCoursesList;