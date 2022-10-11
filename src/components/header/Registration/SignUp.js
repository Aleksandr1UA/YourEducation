import '../SignIn.css';
import { useState } from 'react';
import { Modal, Container, Row, Col, Form, Card, InputGroup, Button, OverlayTrigger, Tooltip, FloatingLabel, ProgressBar } from "react-bootstrap";
import { EyeSlashFill, InfoCircle } from "react-bootstrap-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate  } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SignUp({setDataProfile}) {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [select, setSelect] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => setShow(false);

    const navigate = useNavigate();
    
    let { register, handleSubmit, getValues, formState: { errors } } = useForm();

    handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if(form.checkValidity() === false) { 
            e.stopPropagation();
        }

        if(select === 'instructor'){  
            navigate('/profile-instructor/instructor-edit-profile', { replace: true });
        }
        if (select === 'student') {
            navigate('/profile-student/student-edit-profile', { replace: true })
        }
        setValidated(true);
        
    }
    
    //const onSubmit = data => console.log(data);
    
    /*
    const [message, setMessage] = useState('');

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('/post', {
                method: 'POST',
                body: JSON.stringify({
                    email: email, 
                })
            });

            if (res.status === 200) {
                setEmail('');
                setMessage('User create successfully');
            } else {
                setMessage('Some error occured');
            }
        } catch (err) {
            console.log(err);
        }
    };
    */

    const saveData = () => {
        let newData = {
            email: email,
            password: password,
            select: select
        };
        setDataProfile(newData); 
    }
    /* Open/Close Input Password */
    const [type, setType] = useState('password');
    const onClick = () => setType(type === 'password' ? 'text' : 'password');
    /* Start Valid ProgressBar */
    let numRed = 0;
    let numYellow = 0;
    let numGreen = 0;
    let protect = 0;

    if (password.match(/[a-z]/)) {
        protect++;
    }
    if (password.match(/[A-Z]/)) {
        protect++;
    }
    if (password.match(/[0-9]+/)) {
        protect++;
    }
    if (password.match(/[!@#$%^&*]+/)) {
        protect++;
    }
    if (protect >= 0 && protect <= 1) {
        numRed = 30;
    } else if (protect > 1 && protect < 3) {
        numYellow = 60;
    } else if (protect >= 3) {
        numGreen = 100;
    }
    /* End Valid ProgressBar */
    
    return <>
        <Button variant={'info'} onClick={() => setShow(true)}>
            <span className='d-flex align-items-center fw-bold'>
                <FontAwesomeIcon className={'singup_icon me-3'} icon={faRightToBracket} />
                Registration
            </span>
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton />
            <Modal.Body>
                <Container>
                    <Row className={'justify-content-center align-items-center'}>
                        <Col sm={5} md={7} lg={9} xl={10} xxl={11}>
                            <Card className={'card-body rounded-3 p-4 p-sm-5'}>
                                <div className={'text-center'}>
                                    <h1 className={'mb-2'}>Sign up</h1>
                                </div>
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
                                                    onChange: (e) => setEmail(e.target.value)
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
                                                    onChange: (e) => setPassword(e.target.value)
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
                                    </InputGroup> 

                                    <InputGroup size={'lg'} className={'mb-4'}>
                                        <FloatingLabel className={'w-100 mb-1'}>
                                            <Form.Control id={'signupConfirmPassword'} className={'rounded-3'}
                                                {...register('password_repeat', {
                                                    validate: (match) => {
                                                        const password = getValues('password');
                                                        return match === password || 'Passwords should match!'
                                                    }
                                                    })} 
                                                type={type} placeholder={'Confirm password'} required />
                                            <label htmlFor={'signupConfirmPassword'} className={'h5'}>Enter Confirm Password</label> 
                                        </FloatingLabel>
                                        {<Form.Text className={'text-danger'}>{errors.password_repeat?.message}</Form.Text>  }
                                    </InputGroup>
                                    <Form.Select className={'mb-4'}
                                        {...register('select_account', {
                                            required: true,
                                            message: 'Please select account',
                                            onChange: (e) => setSelect(e.target.value)})} required>
                                        <option value={''}>Select account</option>
                                        <option value={'instructor'} required>Instructor</option>
                                        <option value={'student'} required>Student</option>
                                    </Form.Select>
                                    {<Form.Text className={'text-danger'}>{errors.select_account?.message}</Form.Text>}
                                    <div className={'d-grid'}>
                                        <Button onClick={email && password && select ? handleClose || saveData : null}  
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

export default SignUp;