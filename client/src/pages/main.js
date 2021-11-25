import React from 'react'
import MenuBar from '../components/menubar'
import PostListComponent from '../components/postListComponent'


function Main() {
    return (
        <>
            <MenuBar />
            <div className="ui grid" style={{ paddingLeft: '30px', paddingRight: '30px', height: '100%' }}>
                <PostListComponent />
                <div class="five wide column"> there </div>
            </div>
        </>
    )
}

export default Main
