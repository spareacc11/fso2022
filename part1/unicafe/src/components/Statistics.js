const StatisticLine = ({ text, value }) => {
  const roundedValue = Math.round(value * 10) / 10;
  return (
    <tr>
      <td>{text}</td>
      <td>{text === 'positive' ? roundedValue + ' %' :  roundedValue}</td>
    </tr>
  );
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  let feedback;
  if (total > 0) {
    feedback = (
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='total' value={total} />
          <StatisticLine text='average' value={(good * 1 + neutral * 0 + bad * -1) / total} />
          <StatisticLine text='positive' value={((good / total) * 100)} />
        </tbody>
      </table>
    );
  } else {
    feedback = <p>No feedback given</p>;
  }

  return (
    <>
      <h1>statistics</h1>
      {feedback}
    </>
  );
};

export default Statistics;