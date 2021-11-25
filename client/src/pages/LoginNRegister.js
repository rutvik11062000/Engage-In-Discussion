import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function LoginNRegister(props) {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='blue' textAlign='center'>
                    <Image src='https://yt3.ggpht.com/ytc/AKedOLTxAANt4In2gv9PzQX8lLEXPOe92v9w2wjIfKCqTQ=s900-c-k-c0x00ffffff-no-rj' /> {props.methodName} to Engage
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button color='blue' fluid size='large'>
                            {props.methodName}
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us?
                </Message>
            </Grid.Column>
        </Grid>
    )
}
export default LoginNRegister