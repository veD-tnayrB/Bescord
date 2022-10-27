import * as React from "react";
import { Video } from '@community/bescord/video';
import { CamList } from "../components/cam-list";

export /*bundle*/
function View(): JSX.Element {
    return (
        <>  
            <Video />
            <CamList />
        </>
    );
}