import React from "react";
import { useSelector } from "react-redux"
import { IRootState } from "../types/app";

function Question() {
  const appSelector = useSelector((state: IRootState) => state.app);
  const [questions, setQuestions] = React.useState([])


  console.log('appSelector: ', appSelector)
  React.useEffect(() => {
    async function fetchQuestions() {
      if(appSelector.amount === 0 || !appSelector.category || !appSelector.difficulty || !appSelector.type) return;
      const res = await fetch(`https://opentdb.com/api.php?amount=${appSelector.amount}&category=${appSelector.category}&difficulty=${appSelector.difficulty}&type=${appSelector.type}`);
      const data = await res.json();
      setQuestions(data.results)
    }
    fetchQuestions();
  }, [appSelector])

  console.log('questions: ', questions)



  return (
    <div>question</div>
  )
}

export default Question