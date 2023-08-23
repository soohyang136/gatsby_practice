import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import PostItem from "./PostItem";
import { graphql } from "gatsby";
import { PostListItemType } from "../../types/PostItem.type";

type PostListProps = {
    posts: PostListItemType[]
}

const POST_ITEM_DATA = {
    title: 'Post Item Title',
    date: '2020.01.29.',
    categories: ['Web', 'Frontend', 'Testing'],
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
    thumbnail:
      '<https://discourse-dotnetdev-upload.ewr1.vultrobjects.com/optimized/2X/e/e0b08e26b9bea2a4b2cf3df4cd5fa88214f959dc_2_1000x1000.jpeg>',
    link: '<https://www.google.co.kr/>',
  }

const PostListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 768px;
    margin: 0 auto;
    padding: 50px 0 100px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 100%;
        padding: 50px 20px;
    }
`

const PostList: FunctionComponent<PostListProps> = function({
    posts,
}) {
    return (
        <PostListWrapper>
            {posts.map(
                ({
                    node: { id, frontmatter },
                }: PostListItemType) => (
                    <PostItem
                        {...frontmatter}
                        link="https://www.google.co.kr/"
                        key={id}
                    />
                )
            )}    
        </PostListWrapper>
    )
}

export default PostList;

