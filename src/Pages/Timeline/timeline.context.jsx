import { createContext, useContext, useState } from 'react';

const TimelineContext = createContext(null);

export function TimelineProvider({ children }) {
    const [isTimelineOpen, setIsTimelineOpen] = useState(false);
    const openTimeline = () => {
        setIsTimelineOpen(true);
    };
    const closeTimeline = () => {
        setIsTimelineOpen(false);
    };
    return (
        <TimelineContext.Provider value={{ isTimelineOpen, openTimeline, closeTimeline }}>
            {' '}
            {children}{' '}
        </TimelineContext.Provider>
    );
}

export function useTimeline() {
    const context = useContext(TimelineContext);
    if (!context) {
        throw new Error('useTimeline must be used inside TimelineProvider');
    }
    return context;
}
