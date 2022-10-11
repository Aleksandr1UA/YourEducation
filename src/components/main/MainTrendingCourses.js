import { Container, Row, Col } from "react-bootstrap";
import MainSliders from "./MainSlider/MainSliders";

function MainTrendingCourses() {
    return <section className={'pb-5 pt-0 pt-lg-5'}>
        <Container>
            <Row className={'mb-4'}>
                <Col lg={8} className={'mx-auto text-center'}>
                    <h2 className={'fs-1'}>Our Trending Courses</h2>
                    <p className={'mb-0'}>Check out most &#128293; courses in the market</p>
                </Col>
            </Row>
            <Row>
                <MainSliders />
            </Row>
            
        </Container>
        
    </section>
}

export default MainTrendingCourses;