import Template from "components/common/Template";
import CommentWidget from "components/post/CommentWidget";
import PostContent from "components/post/PostContent";
import PostHead from "components/post/PostHead";
import { graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import { PostFrontmatterType } from "types/PostItem.type";

type PostTemplateProps = {
    data: {
        allMarkdownRemark: {
            edges: PostPageItemType[]
        }
    }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function({
    data: {
        allMarkdownRemark: { edges }
    }
}) {
    
    const {
        node: {
          html,
          frontmatter: {
            title,
            summary, // 나중에 사용할 예정입니다!
            date,
            categories,
            thumbnail: {
              childImageSharp: { gatsbyImageData },
            },
          },
        },
      } = edges[0]

    return (
        <Template>
            <PostHead
                title={title}
                date={date}
                categories={categories}
                thumbnail={gatsbyImageData}
            />
            <PostContent html={html} />
            <CommentWidget />
        </Template>
    )
}

export type PostPageItemType = {
    node : {
        html: string
        frontmatter: PostFrontmatterType
    }
}

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`