import CareerTimeline from './components/timeline';
import Card from '@mui/material/Card';

export default function TimelineContainer(){
    return (
        <Card sx={{
            margin: "4vh 4vmax 4vmax 2vmax",
            padding: "0.8rem 1rem",
            borderRadius: "10px",
            border: `2px solid white`
          }}>
            <CareerTimeline/>
        </Card>
    );
}