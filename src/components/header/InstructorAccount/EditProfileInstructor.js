import '../../../scss/custom.scss';
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Eye, Person, Plus, X } from "react-bootstrap-icons";

function EditProfileInstructor() {
    return <>
        <Card className={'bd-transparent border rounded-3'}>
            <Card.Header className={'bg-transparent border-bottom'}>
                <h3 className={'mb-0'}>Edit Profile</h3>
            </Card.Header>
            <Card.Body>
                <Form className={'row g-4'}>
                    <Col className={'col-12 justify-content-center align-items-center'}>
                        <Form.Label>Profile Picture</Form.Label>
                        <div className={'d-flex align-items-center'}>
                            <Form.Label className={'position-relative me-4'} htmlFor='uploadavatar' 
                                title={'Replace this avatar'}>
                                <span className={'avatar avatar-xl'}>
                                    {/*<img id='upload-avatar-preview' 
                                        className={'avatar-img rounded-circle border border-white border-3 shadow'}
                                        src={''} alt={'avatar-preview'} />*/}
                                    <Person id='upload-avatar-preview' 
                                        className={'avatar-img rounded-circle border border-white border-3 shadow'} />
                                </span>
                                <button className={'uploadremove'}>
                                    <X className={'text-white'} />
                                </button>
                            </Form.Label>
                            <Form.Label className={'btn bg-blue-1 text-primary mb-0'} 
                                htmlFor={'uploadavatar'}>Change</Form.Label>
                            <Form.Control id='uploadavatar' className={'d-none'} type={'file'} />
                        </div>
                    </Col>
                    <Col className={'col-12'}>
                        <Form.Label>Full name</Form.Label>
                        <InputGroup>
                            <Form.Control type={'text'} placeholder={'First name'} />
                            <Form.Control type={'text'} placeholder={'Last name'} />
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <Form.Label>UserName</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>YourEducation.com</InputGroup.Text>
                            <Form.Control type={'text'} placeholder={'Enter username'} />
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type={'email'} placeholder={'Enter Email'} />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type={'text'} placeholder={'Enter phone number'} />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type={'text'} placeholder={'Enter location'} />
                    </Col>
                    <Col className={'col-12'}>
                        <Form.Label>About me</Form.Label>
                        <Form.Control as={'textarea'} rows={'3'} placeholder={'Enter about me...'} />
                        <Form.Text>Brief description for your profile.</Form.Text>
                    </Col>
                    <Col className={'col-12'}>
                        <Form.Label>Education</Form.Label>
                        <Form.Control className={'mb-2'} type={'text'} placeholder={'Enter your education'} />
                        <Form.Control className={'mb-2'} type={'text'} placeholder={'Enter your education'} />
                        <Button className={'btn-sm btn-light mb-0'}>
                            <Plus className={'me-1'} /> Add more
                        </Button>
                    </Col>
                    <div className={'d-sm-flex justify-content-end'}>
                        <Button className={'btn btn-primary mb-0'}>Save changes</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        <Row className={'g-4 mt-3'}>
            <Col lg={6}>
                <Card className={'bg-transparent border rounded-3'}>
                    <Card.Header className={'bg-transparent border-bottom'}>
                        <Card.Title className={'mb-0'}>Update email</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <p>Your current email address is&#160;
                             <span className={'text-primary'}>example@gmail.com</span>
                        </p>
                        <Form>
                            <Form.Label>Enter your new email id</Form.Label>
                            <Form.Control type={'email'} placeholder={'Enter new email'} />
                            <div className={'d-flex justify-content-end mt-4'}>
                                <Button className={'btn btn-primary mb-0'}>Update email</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className={'bg-transparent border rounded-3'}>
                    <Card.Header className={'bg-transparent border-bottom'}>
                        <Card.Title className={'mb-0'}>Update password</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div className={'mb-3'}>
                            <Form.Label>Current password</Form.Label>
                            <Form.Control type={'password'} placeholder={'Enter current password'} />
                        </div>
                        <div className={'mb-3'}>
                            <Form.Label>Enter new Password</Form.Label>
                            <InputGroup>
                                <Form.Control type={'password'} placeholder={'Enter new password'} />
                                <InputGroup.Text className={'p-0 bg-transparent'}>
                                    <Eye className={'cursor-pointer text-dark p-2'} style={{width: '2.5rem'}} />
                                </InputGroup.Text>
                            </InputGroup>
                        </div>
                        <div>
                            <Form.Label>Confirm new password</Form.Label>
                            <Form.Control type={'password'} placeholder={'Enter new password'} />
                        </div>
                        <div className={'d-flex justify-content-end mt-4'}>
                            <Button className={'btn btn-primary mb-0'}>Change password</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
}

export default EditProfileInstructor;