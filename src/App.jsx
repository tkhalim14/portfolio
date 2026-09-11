import './App.css';
import Home from './Pages/Home';
import About from './Pages/AboutMe';
import Timeline from './Pages/Timeline';
import Projects from './Pages/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider, styled } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { customTheme } from './theme';
import { SideNavWidth } from './Components/Header/styles';
import { TimelineProvider, useTimeline } from './Pages/Timeline/timeline.context';

const HeaderSpacing = styled(Box)(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

function TimelineModal() {
    const { isTimelineOpen, closeTimeline } = useTimeline();
    return <Timeline isModalOpen={isTimelineOpen} onClose={closeTimeline} />;
}

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <TimelineProvider>
                <HashRouter
                    basename="/"
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                >
                    <Box className="Main" color="background.default">
                        <div>
                            <Header />
                        </div>
                        <Box
                            className="pageContent"
                            sx={{ paddingLeft: { xs: 0, md: SideNavWidth } }}
                        >
                            <HeaderSpacing />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/About" element={<About />} />
                                {/* <Route path='/Timeline' element={<Timeline/>}/> */}
                                <Route path="/Projects" element={<Projects />} />
                            </Routes>
                        </Box>
                        <TimelineModal />
                        <Box className="footerContent" sx={{ ml: { xs: '2rem', md: '4rem' } }}>
                            <Footer />
                        </Box>
                    </Box>
                </HashRouter>
            </TimelineProvider>
        </ThemeProvider>
    );
}

export default App;
