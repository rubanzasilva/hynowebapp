import React from 'react';
import {CommunityContainer,CommunityContent,CommunityIcon,CommunityImageCard} from './CommunityActivitiesElements';
import CommunityCards from '../CommunityCard';
import Icon1 from './hypno.jpg';

const Community = (props) => {
    return (
        <CommunityContainer>
        <CommunityContent>

                 <CommunityCards title="UNLOCK YOUR POWER WITH HYPNO"
                 description="The Hypno community is a place for you to connect with other people who are hypnotherapists, and to share your thoughts and experiences with them.
                 "
                 />

 <CommunityIcon>
            <CommunityImageCard src={Icon1}/>

            </CommunityIcon>  

            </CommunityContent>

        </CommunityContainer>
    )
}

export default Community