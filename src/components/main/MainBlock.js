
import { faTv, faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PatchCheckFill } from "react-bootstrap-icons";

function MainBlock() {

    const mainCount = {
        countCurses: 100,
        countExpert: 200,
        countStudents: 60,
        cerCourses: 6
    };

    const [countCurses, setCountCurses] = useState(0);
    const [countExpert, setCountExpert] = useState(0);
    const [countStudents, setCountStudents] = useState(0);
    const [countCerCourses, setCountCerCourses] = useState(0);

    useEffect(() => {
        const num = mainCount.countCurses;

        if(countCurses < 0) {return;}

        const step = Math.round(10000 / num);

        const idCourses = setTimeout(() =>{
            setCountCurses((countCurses) => countCurses + 1);
        }, step);

        if (countCurses === num) {
            console.log('>>::', countCurses === num);
            clearTimeout(idCourses);
        }
        
    }, [mainCount.countCurses, countCurses]);

    useEffect(() => {
        const num = mainCount.countExpert;

        if(countExpert < 0) {return;}

        const step = Math.round(10000 / num);

        const idExpert = setTimeout(() =>{
            setCountExpert((countExpert) => countExpert + 1);
        }, step);

        if (countExpert === num) {
            console.log('>>::', countExpert === num);
            clearTimeout(idExpert);
        }
        
    }, [mainCount.countExpert, countExpert]);

    useEffect(() => {
        const num = mainCount.countStudents;

        if(countStudents < 0) {return;}

        const step = Math.round(10000 / num);

        const idStudents = setTimeout(() =>{
            setCountStudents((countStudents) => countStudents + 1);
        }, step);

        if (countStudents === num) {
            console.log('>>::', countStudents === num);
            clearTimeout(idStudents);
        }
        
    }, [mainCount.countStudents, countStudents]);

    useEffect(() => {
        const num = mainCount.cerCourses;

        if(countCerCourses < 0) {return;}

        const step = Math.round(10000 / num);

        const idCert = setTimeout(() =>{
            setCountCerCourses((countCerCourses) => countCerCourses + 1);
        }, step);

        if (countCerCourses === num) {
            console.log('>>::', countCerCourses === num);
            clearTimeout(idCert);
        }
        
    }, [mainCount.cerCourses, countCerCourses]);

    /*
    const time = 10000;
    const step = 1;

    useEffect(() => {
        let num = 100;
        let n = 0;
        let e = document.querySelector('#count_courses');
        let t = Math.round(time / (num /step));
        let interval = setInterval(() => {
            n = n + step;
            if (n === num) {
                clearInterval(interval);
            }
            e.innerHTML = n;
        }, t);
    })

    useEffect(() => {
        let num = 200;
        let n = 0;
        let e = document.querySelector('#count_users');
        let t = Math.round(time / (num /step));
        let interval = setInterval(() => {
            n = n + step;
            if (n === num) {
                clearInterval(interval);
            }
            e.innerHTML = n;
        }, t);
    })

    useEffect(() => {
        let num = 60;
        let n = 0;
        let e = document.querySelector('#count_students');
        let t = Math.round(time / (num /step));
        let interval = setInterval(() => {
            n = n + step;
            if (n === num) {
                clearInterval(interval);
            }
            e.innerHTML = n;
        }, t);
    })

    useEffect(() => {
        let num = 6;
        let n = 0;
        let e = document.querySelector('#certified_courses');
        let t = Math.round(time / (num /step));
        let interval = setInterval(() => {
            n = n + step;
            if (n === num) {
                clearInterval(interval);
            }
            e.innerHTML = n;
        }, t);
    })
    */

    return <section className={'main_block py-0 py-xl-5'}>
    <Container>
        <Row className={'g-4'}>
            <Col xl={3} sm={6}>
                <div className={'d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-25 rounded-3'}>
                    <span className={'display-6 lh-1 mb-0'}>
                        <FontAwesomeIcon className={'display-3 text-warning'} icon={faTv} />
                    </span>
                    <div className={'ms-4 h6 fw-normal mb-0'}>
                        <div className={'d-flex'}>
                            <h5 id='count_courses' className={'mb-0 fw-bold'}>{countCurses}</h5>
                            <span className={'mb-0 h5'}>K</span>
                        </div>
                        <p className={'mb-0 fw-bold'}>Online Courses</p>
                    </div>
                </div>
            </Col>
            <Col xl={3} sm={6}>
                <div className={'d-flex justify-content-center align-items-center p-4 bg-primary bg-opacity-25 rounded-3'}>
                    <span className={'display-6 lh-1 mb-0'}>
                        <FontAwesomeIcon className={'display-3 text-primary'} icon={faUserTie} />
                    </span>
                    <div className={'ms-4 h6 fw-normal mb-0'}>
                        <div className={'d-flex'}>
                            <h5 id='count_users' className={'mb-0 fw-bold'}>{countExpert}</h5>
                            <span className={'mb-0 h5'}>+</span>
                        </div>
                        <p className={'mb-0 fw-bold'}>Expert Tutors</p>
                    </div>
                </div>
            </Col>
            <Col xl={3} sm={6}>
                <div className={'d-flex justify-content-center align-items-center p-4 bg-danger bg-opacity-25 rounded-3'}>
                    <span className={'display-6 lh-1 mb-0'}>
                        <FontAwesomeIcon className={'display-3 text-danger'} icon={faUserGraduate} />
                    </span>
                    <div className={'ms-4 h6 fw-normal mb-0'}>
                        <div className={'d-flex'}>
                            <h5 id='count_students' className={'mb-0 fw-bold'}>{countStudents}</h5>
                            <span className={'mb-0 h5'}>K+</span>
                        </div>
                        <p className={'mb-0 fw-bold'}>Online Students</p>
                    </div>
                </div>
            </Col>
            <Col xl={3} sm={6}>
                <div className={'d-flex justify-content-center align-items-center p-4 bg-success bg-opacity-25 rounded-3'}>
                    <span className={'display-6 lh-1 mb-0'}>
                        <PatchCheckFill className={'display-3 text-success'} />
                    </span>
                    <div className={'ms-4 h6 fw-normal mb-0'}>
                        <div className={'d-flex'}>
                            <h5 id='certified_courses' className={'mb-0 fw-bold'}>{countCerCourses}</h5>
                            <span className={'mb-0 h5'}>K+</span>
                        </div>
                        <p className={'mb-0 fw-bold'}>Certified Courses</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    </section>
}

export default MainBlock;