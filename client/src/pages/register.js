import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';


function Register(props) {
    const navigate = useNavigate();
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    const { onChange, onSubmit, values } = useForm(registerUser, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(
            _,
            {
                data: { register: userData }
            }
        ) {
            console.log(userData)
            context.login(userData);
            navigate('/')
        },
        onError(err) {
            // console.log(err.graphQLErrors[0].extensions.errors)
            if (err.graphQLErrors[0])
                setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: values
    });

    function registerUser() {
        addUser();
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='blue' textAlign='center'>
                    <Image src='https://yt3.ggpht.com/ytc/AKedOLTxAANt4In2gv9PzQX8lLEXPOe92v9w2wjIfKCqTQ=s900-c-k-c0x00ffffff-no-rj' /> Login to Engage
                </Header>
                <Form size='large' onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left'
                            placeholder="Username.."
                            name="username"
                            type="text"
                            value={values.username}
                            error={errors.username ? true : false}
                            onChange={onChange} />
                        <Form.Input fluid icon='user' iconPosition='left'
                            placeholder="Email id.."
                            name="email"
                            type="email"
                            value={values.email}
                            error={errors.email ? true : false}
                            onChange={onChange} />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder="Password.."
                            name="password"
                            type="password"
                            value={values.password}
                            error={errors.password ? true : false}
                            onChange={onChange}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={values.confirmPassword}
                            error={errors.confirmPassword ? true : false}
                            onChange={onChange}
                        />

                        <Button color='blue' fluid size='large'>
                            Register
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    Already registered? <a href="/login"> Login </a>
                </Message>

                {Object.keys(errors).length > 0 && (
                    <div className="ui error message">
                        <ul className="list">
                            {Object.values(errors).map((value) => (
                                <li key={value}>{value}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </Grid.Column>
        </Grid>
    )
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;
export default Register