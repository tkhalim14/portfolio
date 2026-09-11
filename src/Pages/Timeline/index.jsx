import ModalComponent from '../../Components/Modal';
import CareerTimeline from './components/timeline';
import Card from '@mui/material/Card';

export default function TimelineContainer({ isModalOpen, onClose }) {
    return (
        <ModalComponent open={isModalOpen} onClose={onClose} isCustom={true}>
            <Card
                sx={{
                    padding: '1rem 1rem 2rem 1rem',
                    borderRadius: '10px',
                    border: `2px solid white`,
                }}
                alt="TimelineCard"
            >
                <CareerTimeline onClose={onClose} />
            </Card>
        </ModalComponent>
    );
}
