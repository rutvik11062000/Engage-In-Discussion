import React from 'react'
import { List } from 'semantic-ui-react'

function PostListItem({postListData}) {

    const {title, author, createdAt, like_count, view_count, tags } = postListData;
    return (
            <List.Item >
                <List.Icon name='github' size='big' verticalAlign='middle' />
                <List.Content verticalAlign='middle'>
                    <h4 style={{ paddingLeft: "10px", marginBottom: "5px" }}><List.Header>{title}</List.Header></h4>
                    <div style={{ paddingLeft: "10px", marginBottom: "0px" }}><List.Description >{author} created at: {createdAt}</List.Description> </div>
                </List.Content>
                <List.Icon name='caret up' size='big' verticalAlign='middle' color='grey' />
                <List.Content verticalAlign='middle'>{like_count}</List.Content>
                <List.Icon name='eye' size='large' verticalAlign='middle' color='grey' style={{ paddingLeft: "90px" }} />
                <List.Content verticalAlign='middle'>{view_count}</List.Content>
            </List.Item>
    )
}

export default PostListItem
