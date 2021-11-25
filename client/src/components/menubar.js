import React, { useContext } from 'react'
import { Menu } from 'semantic-ui-react'
import { AuthContext } from '../context/auth';

function MenuBar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <Menu pointing size="massive">
            <Menu.Menu position=''>
                <Menu.Item >
                    <img src="https://yt3.ggpht.com/ytc/AKedOLTxAANt4In2gv9PzQX8lLEXPOe92v9w2wjIfKCqTQ=s900-c-k-c0x00ffffff-no-rj" alt='logo' />
                    <b>ENGAGE IN DISCUSSION</b>
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
                <Menu.Item name={user.username} />
                <Menu.Item onClick={logout}><b>Log Out</b></Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default MenuBar
