import CustomizedTimeline from './index.js';
import Card from '@mui/material/Card';

import './index.css';

export default function TimelineContainer(){
    return (
        <Card className='timeline-background'>
            <CustomizedTimeline/>
        </Card>
    );
}