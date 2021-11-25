import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';


function Login(props) {
    const navigate = useNavigate();
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: '',
        password: ''
    });

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(
            _,
            {
                data: { login: userData }
            }
        ) {
            console.log(userData)
            context.login(userData);
            navigate('/')
        },
        onError(err) {
            // console.log(err.graphQLErrors[0].extensions.errors)
            if(err.graphQLErrors[0])
                setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: values
    });

    function loginUserCallback() {
        loginUser();
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

                        <Button color='blue' fluid size='large'>
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href="/register"> Register </a>
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

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login