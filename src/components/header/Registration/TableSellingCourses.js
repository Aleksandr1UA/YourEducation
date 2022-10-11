import { Badge, Button, Table } from "react-bootstrap";
import { PencilSquare, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function TableSellingCourses() {

    const cellContent = [
        {
            courseImg: '../images/web_design.jpeg',
            courseImgAlt: 'GraphQL',
            courseName: 'Building Scalable APIs with GraphQL',
            selling: 34,
            amount: '1,25,478',
            period: '9 month'
        },
        {
            courseImg: '../images/websites_bootstrap.jpeg',
            courseImgAlt: 'Bootstrap 5',
            courseName: 'Bootstrap 5 From Scratch',
            selling: 45,
            amount: '2,85,478',
            period: '6 month'
        },
        {
            courseImg: '../images/websites_photoshop.jpeg',
            courseImgAlt: 'Graphic Design',
            courseName: 'Graphic Design Masterclass',
            selling: 21,
            amount: '85,478',
            period: '4 month'
        },
        {
            courseImg: '../images/learn_invision.jpeg',
            courseImgAlt: 'Invision',
            courseName: 'Learn Invision',
            selling: 28,
            amount: '98,478',
            period: '8 month'
        },
        {
            courseImg: '../images/angular.jpeg',
            courseImgAlt: 'Angular',
            courseName: 'Angular - The Complete Guider',
            selling: 38,
            amount: '1,02,478',
            period: '1 year'
        }
    ]

    return<>
        <Table className={'align-middle p-4 mb-0'}>
            <thead className={'table-dark'}>
                <tr>
                    <th scope={'col'} className={'border-0 rounded-start'}>Course Name</th>
                    <th scope={'col'} className={'border-0'}>Selling</th>
                    <th scope={'col'} className={'border-0'}>Amount</th>
                    <th scope={'col'} className={'border-0'}>Period</th>
                    <th scope={'col'} className={'border-0 rounded-end'}>Action</th>
                </tr>
            </thead>
            <tbody>
            { cellContent.map((content, i) => 
                <tr key={i}>
                    <td>
                        <div className={'d-flex align-items-center'}>
                            <div>
                                <img src={content.courseImg} className={'rounded'} style={{width: '3.75rem'}} 
                                    alt={content.courseImgAlt} />
                            </div>
                            <span className={'mb-0 ms-2 table-responsive'}>
                                <Link to={'/#'} className={'h6 text-decoration-none text-dark fw-bold link-primary'}>
                                    {content.courseName}
                                </Link>
                            </span>
                        </div>
                    </td>
                    <td>{content.selling}</td>
                    <td>{content.amount}</td>
                    <td>
                        <Badge className={'bg-opacity-10 text-primary'}>{content.period}</Badge>
                    </td>
                    <td>
                        <Link to={'/#'} className={'btn btn-sm btn-success bg-opacity-10 me-1 mb-0'}>
                            <PencilSquare className={'fa-fw'} />
                        </Link>
                        <Button className={'btn-sm btn-danger btn-round mb-0'}>
                            <X className={'fa-fw'} />
                        </Button>
                    </td>
                </tr>)
            }
            </tbody>
        </Table>
    </>
}

export default TableSellingCourses;