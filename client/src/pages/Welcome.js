import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Header, Image } from 'semantic-ui-react'


function Welcome() {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h1' color='blue' textAlign='center'>
                    <Image src='https://yt3.ggpht.com/ytc/AKedOLTxAANt4In2gv9PzQX8lLEXPOe92v9w2wjIfKCqTQ=s900-c-k-c0x00ffffff-no-rj' /> Engage In Dicussion
                </Header>
                <div style={{ display: 'flex', paddingTop: '20px' }}>
                    <Button color='blue' fluid size='large' as={Link} to="/login">
                        Login
                    </Button>
                    <Button fluid size='large' as={Link} to="/register">
                        Register
                    </Button>
                </div>
            </Grid.Column>
        </Grid>
    )
}

export default Welcome
