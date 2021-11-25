import React from 'react'

function PostListComponentHeader() {
    return (
        <div>
                        <div class="ui top attached tabular menu">
                <div class="menu">
                    <div class="item" style={{ width: "350px" }}>
                        <div class="ui transparent icon input">
                            <input type="text" placeholder="Search users..." />
                            <i class="search link icon"></i>
                        </div>
                    </div>
                </div>
                <div class="right menu">
                    <div class="item">
                        <button class="ui right labeled icon button primary">
                            <i class="add icon"></i>
                            Add Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostListComponentHeader
