import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// actions
import { setAmount, setCategory, setDifficulty, setType } from '../../states/app.slice';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const onChangeCategory = (event: SelectChangeEvent) => {
    dispatch(setCategory(event.target.value))
  };

  const onChangeDifficulty = (event: SelectChangeEvent) => {
    dispatch(setDifficulty(event.target.value))
  };

  const onChangeType = (event: SelectChangeEvent) => {
    dispatch(setType(event.target.value))
  };

  const onChangeAmount = (event: any) => {
    dispatch(setAmount(event.target.value))
  };

  function handleStart() {
    navigate('/question')
  }

  return (
      <Container maxWidth="md">
        <Typography variant='h2' fontWeight="bold" textAlign="center">Quiz App</Typography>
        <Box mt={3}>
          <FormControl size='small' fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              onChange={onChangeCategory}
              defaultValue=""
            >
              <MenuItem value={14}>Entertainment: Television</MenuItem>
              <MenuItem value={12}>Entertainment: Music</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Box mt={3}>
          <FormControl size='small' fullWidth>
            <InputLabel>Difficulty</InputLabel>
            <Select
              label="Difficulty"
              defaultValue=""
              onChange={onChangeDifficulty}
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box mt={3}>
          <FormControl size='small' fullWidth>
            <InputLabel>Type</InputLabel>
            <Select label="Type" defaultValue="" onChange={onChangeType}>
              {/* <MenuItem value="multple">Multiple Choice</MenuItem> */}
              <MenuItem value="boolean">True/False</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box mt={3}>
          <FormControl size='small' fullWidth>
            <TextField size='small' defaultValue={0} label="Amount of questions" variant="outlined" type="number" onChange={onChangeAmount} />
          </FormControl>
        </Box>

        <Box mt={3} textAlign="center" onClick={handleStart}>
          <Button variant="contained">GET STARTED</Button>
        </Box>

        
      </Container>
  )
}

export default Dashboard