import './MainSlider.css'
import '../../../scss/custom.scss'
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Bookmark, StarFill, Clock, Table, Cart, PersonCircle } from 'react-bootstrap-icons';

function SingleSlider({slide}) {
    const [isHovering, setIsHovering] = useState(false);

    return <Card className={'border bg-transparent'}>
        <Card.Img variant={'top'} src={slide.img} alt={'course image'} />
        <Card.Body className={'pb-0'}>
            <div className={'d-flex justify-content-between mb-3'}>
                <span className={'hstack gap-2'}>
                    <Link to='' className={'badge bg-primary bg-opacity-10 text-primary text-decoration-none'}>
                        {slide.course}
                    </Link>
                    <Link to='' className={'badge text-bg-dark text-decoration-none'}>{slide.level}</Link>
                </span>
                <Link to='' className={'h6 fw-light mb-0'}><Bookmark /></Link>
            </div>
            <Card.Title>
                <Link to='' className={'h5 text-decoration-none'}>{slide.title}</Link>
            </Card.Title>
            <div className={'d-flex justify-content-between mb-2'}>
                <div className={'hstack gap-2'}>
                    <p className={'text-warning fw-bold m-0'}>{slide.rateStar} 
                        <StarFill className={'text-warning mb-1'} />
                    </p>
                    <span className={'small'}>({slide.ratePeople})</span>
                </div>
                <div className={'hstack gap-2'}>
                    <p className={'h6 fw-light mb-0 m-0'}>{slide.student}</p>
                    <span className={'small'}>(Student)</span>
                </div>
            </div>
            <div className={'hstack gap-3'}>
                <span className={'h6 fw-light mb-0'}>
                    <Clock className={'text-danger me-2'} />
                    {slide.timeCourse}
                </span>
                <span className={'h6 fw-light mb-0'}>
                    <Table className={'text-orange me-2'} />
                    {slide.lectures} lectures
                </span>
            </div>
        </Card.Body>
        <Card.Footer className={'pt-0 bg-tranparent'}>
            <div className={'d-flex justify-content-between align-items-center'}>
                <div>
                    <PersonCircle className={'text-purple h3 mt-2'} />
                </div>
                <p className={'mb-0 ms-2'}>
                    <Link to='' className={'h6 fw-light mb-0 text-decoration-none'}>{slide.userName}</Link>
                </p>
                {isHovering ?
                    <Button  onMouseOut={() => setIsHovering(false)} variant={'info'}>
                        <Cart className={'me-2'} /> Add to cart
                    </Button>
                    :
                    <h4 onMouseOver={() => setIsHovering(true)} className={'text-info mb-0 '}>${slide.price}</h4>
                }      
            </div>
        </Card.Footer>
    </Card>
}

export default SingleSlider;