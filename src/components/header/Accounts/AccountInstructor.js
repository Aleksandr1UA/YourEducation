import { useState } from "react";
import { useLocalStorage } from "../../useLocalStorage";
import { Button, Card, Col, Container, FloatingLabel, Form, InputGroup, Modal, OverlayTrigger, ProgressBar, Row, Tooltip } from "react-bootstrap";
import { EyeSlashFill, InfoCircle } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AccountInstructor({setDataProfile}) {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [emailInstructor, setEmailInstructor] = useLocalStorage('Email', '');
    const [passwordInstructor, setPasswordInstructor] = useLocalStorage('Password', '');
    const [checked, setChecked] = useLocalStorage('Checkbox', false);

    const handleClose = () => setShow(false);

    const navigate = useNavigate();
    
    let { register, handleSubmit, formState: { errors } } = useForm();

    handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if(form.checkValidity() === false) { 
            e.stopPropagation();
        }
 
        navigate('/profile-instructor/instructor-dashboard', { replace: true });

        setValidated(true);   
    }

    const saveProfile = () => {
        let newData = {
            email: emailInstructor,
            password: passwordInstructor,
        };
        setDataProfile(newData);

    }

    const [type, setType] = useState('password');
    const onClick = () => setType(type === 'password' ? 'text' : 'password');

    let numRed = 0;
    let numYellow = 0;
    let numGreen = 0;
    let protect = 0;

    if (passwordInstructor.match(/[a-z]/)) {
        protect++;
    }
    if (passwordInstructor.match(/[A-Z]/)) {
        protect++;
    }
    if (passwordInstructor.match(/[0-9]+/)) {
        protect++;
    }
    if (passwordInstructor.match(/[!@#$%^&*]+/)) {
        protect++;
    }
    if (protect >= 0 && protect <= 1) {
        numRed = 30;
    } else if (protect > 1 && protect < 3) {
        numYellow = 60;
    } else if (protect >= 3) {
        numGreen = 100;
    }

    return  <>
        <Button variant={'info'} onClick={() => setShow(true)} className={'fw-bold'}>
            Sign In Account Instructor
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton />
            <Modal.Body>
                <Container>
                    <Row className={'justify-content-center align-items-center'}>
                        <Col sm={5} md={7} lg={9} xl={10} xxl={11}>
                            <Card className={'card-body rounded-3 p-4 p-sm-5'}>
                                <div className={'text-center'}>
                                    <h1 className={'mb-2'}>Sign in Account Instructor</h1>
                                </div>
                                <Form onSubmit={handleSubmit} noValidate validated={validated}
                                    className={'mt-4'} method={'post'} >
                                    <InputGroup size={'lg'} className={'mb-3 flex-column'}>
                                        <FloatingLabel className={'w-100'}>
                                            <Form.Control id={'singupInputEmail'} type={'email'}
                                                placeholder={'Enter email'} className={'rounded-3'}
                                                {...register('email', {
                                                    required: 'Please Enter Your Email!',
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: 'Please Enter a Valid Email!'
                                                    },
                                                    onChange: (e) => setEmailInstructor(e.target.value)
                                                })} required autoComplete={'on'} />
                                            <label htmlFor={'singupInputEmail'} className={'h5'}>Email address</label>
                                        </FloatingLabel>
                                        <Form.Text className={'text-danger'}>{errors.email?.message}</Form.Text>  
                                    </InputGroup>
                                </Form>

                                <Form onSubmit={handleSubmit} noValidate validated={validated}
                                    action={'/post'} className={'mt-4'} method={'post'} >
                                    <InputGroup size={'lg'} className={'mb-3 flex-column'}>
                                        <FloatingLabel className={'w-100'}>
                                            <Form.Control id={'singupInputEmail'} type={'email'}
                                                placeholder={'Enter email'} className={'rounded-3'}
                                                {...register('email', {
                                                    required: 'Please Enter Your Email!',
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: 'Please Enter a Valid Email!'
                                                    },
                                                    onChange: (e) => setEmailInstructor(e.target.value)
                                                })} required autoComplete={'on'} />
                                            <label htmlFor={'singupInputEmail'} className={'h5'}>Email address</label>
                                        </FloatingLabel>
                                        <Form.Text className={'text-danger'}>{errors.email?.message}</Form.Text>  
                                    </InputGroup>

                                    <InputGroup size={'lg'} className={'flex-column'}>
                                        <EyeSlashFill className={'position-absolute h5'} 
                                            onClick={onClick} style={{cursor: 'pointer', top: '1rem', right: '-1.5rem'}} />
                                        <FloatingLabel className={'w-100 mb-1'}>
                                            <Form.Control id={'signupInputPassword'} type={type}
                                                placeholder={'Enter password'} className={'rounded-3'} 
                                                {...register('password', {
                                                    required: 'Please Enter Your Password',
                                                    pattern: {
                                                        value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]){8,}/,
                                                        message: 'Include at least one uppercase, one lowercase, one special character, one number and 8 characters long.'
                                                    },
                                                    onChange: (e) => setPasswordInstructor(e.target.value)
                                                })} required />
                                            <label htmlFor={'singupInputPassword'} className={'h5'}>Enter Password</label>   
                                        </FloatingLabel>
                                        <ProgressBar className={'rounded-3 py-1 bg-white'}>
                                            <ProgressBar animated variant={'danger'} now={numRed} key={1} />
                                            <ProgressBar animated variant={'warning'} now={numYellow} key={2} />
                                            <ProgressBar animated variant={'success'} now={numGreen} key={3} />
                                        </ProgressBar> 
                                        <div className={'d-flex justify-content-end'}>
                                            <Form.Text className={'text-danger'}>{errors.password?.message}</Form.Text>
                                            <Form.Label>
                                                <OverlayTrigger placement={'top'}
                                                    overlay={
                                                        <Tooltip>
                                                            Include at least one uppercase, one lowercase, one 
                                                            special character, one number and 8 characters long.
                                                        </Tooltip>
                                                    }>
                                                    <InfoCircle className={'ps-1 h5'} />
                                                </OverlayTrigger>
                                            </Form.Label>    
                                        </div>
                                        <Form.Check type={'checkbox'}
                                            value={checked ? (emailInstructor && passwordInstructor) : ''}
                                            onChange={e => setChecked(e.target.value)}
                                            className={'text-align-end'}
                                            label={'Remember me'} />
                                    </InputGroup> 
                                    <div className={'d-grid'}>
                                        <Button onClick={emailInstructor && passwordInstructor ? handleClose || saveProfile : null}  
                                            type={'submit'} size={'lg'} variant={'primary'}>Sign me up</Button>
                                    </div>
                                    <p className={'mb-0 mt-3 text-center'}>&#169;2022
                                        All rights reserved
                                    </p>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>  
    </>
}

export default AccountInstructor;