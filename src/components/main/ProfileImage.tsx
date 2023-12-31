import React, { FunctionComponent } from "react";
import styled from '@emotion/styled'

const PROFILE_IMAGE_LINK = "https://avatars.githubusercontent.com/u/62911285?s=400&u=605d89efecd8ec0b426a3579aeb901a7ffea81c2&v=4"

const ProfileImageWrapper = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`

const ProfileImage: FunctionComponent = function() {
    return <ProfileImageWrapper  src={PROFILE_IMAGE_LINK} alt="Profile Image"/>
}

export default ProfileImage;