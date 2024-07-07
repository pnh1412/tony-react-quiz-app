import React from "react";
import { Box, Container, Typography, Button } from '@mui/material';
import { decode } from 'html-entities';
import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "../types/app";
import { useNavigate } from "react-router-dom";

import { setScore } from "../../states/app.slice";

function getRandom(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Question() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appSelector = useSelector((state: IRootState) => state.app);
  const score = appSelector.score;

  // states
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [options, setOptions] = React.useState<string[]>([]);
  const [questions, setQuetions] = React.useState<any>([]);

  React.useEffect(() => {
    async function fetchQuestions() {
      if(appSelector.amount === 0 || !appSelector.category || !appSelector.difficulty || !appSelector.type) return;
      const res = await fetch(`https://opentdb.com/api.php?amount=${appSelector.amount}&category=${appSelector.category}&difficulty=${appSelector.difficulty}&type=${appSelector.type}`);
      const data = await res.json();
      const questionItem = data.results[questionIndex]; 
      let answers: string[] =[...questionItem.incorrect_answers];
      answers.splice(getRandom(questionItem.incorrect_answers.length), 0, questionItem.correct_answer);
      setOptions(answers)
      setQuetions(data.results);
    }
    fetchQuestions();
  }, [appSelector])

  function handleAnswer(e: any) {
    const content = e.target.textContent;
    const isCorrect = content === questions[questionIndex].correct_answer;
    if(isCorrect) {
      dispatch(setScore(score + 1))
    }
    
    if(questionIndex + 1 < questions.length) {
      setQuestionIndex(prevState => prevState + 1); 
    } else {
      console.log('redirect to Result page')
      navigate('/result')
    }
  }

  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h4" textAlign="center">Question {questionIndex + 1}</Typography>
        <Typography mt={5}>
          {decode(questions[questionIndex]?.question)}
        </Typography>

        {options.map(option => (
          <Box mt={2} key={option}>
            <Button fullWidth variant="contained" onClick={handleAnswer}>{decode(option)}</Button>
          </Box>
        ))}
        <Box mt={5}>
          Score: {score} / {questions.length}
        </Box>
      </Box>
    </Container>
    
  )
}

export default Question