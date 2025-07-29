import react from 'react';
import { calculateInvestmentResults } from '../util/investment';


export default function Result({ userInput }) {
  let results = calculateInvestmentResults(userInput);
  console.log(results);
  return (
    <section>
      <h2>this is the Insvement Result</h2>
    </section>
  );
}
