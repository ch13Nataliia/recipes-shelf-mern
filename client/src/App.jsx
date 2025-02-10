import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import TopNav from './components/TopNav';
import { useColorModeValue } from '@chakra-ui/react';
function App() {
  
  return (
    <Box minH={'100vh'} bg={useColorModeValue("pink.100", "pink.900" )}>
      {/* Navbar */}
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
