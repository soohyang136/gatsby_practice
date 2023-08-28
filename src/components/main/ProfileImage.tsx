import React, { FunctionComponent } from "react";
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const PROFILE_IMAGE_LINK = "https://avatars.githubusercontent.com/u/62911285?s=400&u=605d89efecd8ec0b426a3579aeb901a7ffea81c2&v=4"

type ProfileImageType = {
    profileImage: IGatsbyImageData
}

const ProfileImageWrapper = styled(GatsbyImage)`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`

const ProfileImage: FunctionComponent<ProfileImageType> = function( { profileImage, } ) {
    return <ProfileImageWrapper image={profileImage} alt="Profile Image"/>
}

export default ProfileImage;