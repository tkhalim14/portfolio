import CustomizedTimeline from './index.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import colors from '../../Components/Constants/colorscheme.js';

import './index.css';

export default function TimelineContainer(){
    return (
        <Card className='timeline-background'>
            <CustomizedTimeline/>
        </Card>
    );
}