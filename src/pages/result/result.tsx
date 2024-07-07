import { Container, Box, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { IRootState } from '../types/app';
import { useNavigate } from 'react-router-dom';
function Result() {
  const navigate = useNavigate();
  const score = useSelector((state: IRootState) => state.app.score);

  return (
    <Container maxWidth="md">
      <Box mt={30}>
        <Typography variant="h3" mb={2}>Final Score {score}</Typography>
        <Button variant="outlined" onClick={() => navigate('/')}>Back to setting</Button>
      </Box>
    </Container>
  )
}

export default Result