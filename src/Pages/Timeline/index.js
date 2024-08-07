import CustomizedTimeline from './components/timeline';
import Card from '@mui/material/Card';

export default function TimelineContainer(){
    return (
        <Card sx={{
            margin: "4vh 4vmax 4vmax 2vmax",
            paddingTop: "1rem",
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px"
          }}>
            <CustomizedTimeline/>
        </Card>
    );
}