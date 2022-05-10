import React from 'react';
import {CommunityCard,CommunityH1,CommunityP,CommunityButton,CommunityButtonLink} from './CommunityCardElements';


//contains the text section for the community activities section
export const CommunityCards = (props) => {

    return (
        <CommunityCard id="community card">

        <CommunityH1>{props.title} </CommunityH1>
        <CommunityP>{props.description}</CommunityP>

        <CommunityButton>
            <CommunityButtonLink to="GreenBeans">Learn more</CommunityButtonLink>
        </CommunityButton>

        

    </CommunityCard>
    )
}

export default CommunityCards
