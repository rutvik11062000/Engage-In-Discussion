import React from 'react'
import { Icon, input, List, Pagination } from 'semantic-ui-react'
import PostListComponentHeader from '../components/postListComponentHeader'
import PostListItem from '../components/postListItem'


function postListComponent() {

    const data = [{
        'title': "This will be the title of the post",
        'author': "User1",
        createdAt: 'August 6, 2021 4:46 PM',
        like_count: '5',
        view_count: '10',
        tags: ["tag1", "tag2"]
    }, {
        'title': "This will be the title of the post2",
        'author': "User2",
        createdAt: 'August 6, 2021 4:46 PM',
        like_count: '5',
        view_count: '10',
        tags: ["tag1", "tag2"]
    }]

    return (
        <div class="eleven wide column">
            <PostListComponentHeader />
            <List divided relaxed verticleAlign='middle' >
                {data.map((d) => (<PostListItem postListData={d}/>))}
            </List>
            <Pagination
                defaultActivePage={5} totalPages={10}
                bottom attached
            />
        </div>
    )
}

export default postListComponent
