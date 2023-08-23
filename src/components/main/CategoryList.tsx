import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

export type CategoryListProps = {
    selectedCategory: string,
    categoryList: {
        [key: string]: number;
    }
}

type CategoryItemProps = {
    active: boolean;
  }
  
type GatsbyLinkProps = {
    children: ReactNode
    className?: string;
    to: string;
} & CategoryItemProps

const CategoryListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    margin: 10px auto 0;
`

const CategoryItem = styled(({active, ...props}: GatsbyLinkProps) => (
    <Link {...props} />
))`
    margin-right: 20px;
    padding: 5px 0;
    font-size: 18px;
    font-weight: ${({active}) => (active ? 800 : 400)};
    cursor: pointer;

    &:last-of-type {
        margin-right: 0;
    }
`

const CategoryList: FunctionComponent<CategoryListProps> = function({
    selectedCategory,
    categoryList
}) {
    return (
        <CategoryListWrapper>
            {Object.entries(categoryList).map(([name, count]) => (
                <CategoryItem
                    to={`/?category=${name}`}
                    active={name === selectedCategory}
                >
                    #{name}({count})
                </CategoryItem>
            ))}
        </CategoryListWrapper>
    )
}

export default CategoryList;