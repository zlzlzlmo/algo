function tournamentWinner(competitions, results) {
  const map = new Map();

  competitions.forEach((competition, index) => {
    let reversedIndex = results[index] === 0 ? 1 : 0;
    const winner = competition[reversedIndex];

    const count = map.get(winner) ? map.get(winner) + 1 : 1;
    map.set(winner, count);
  });

  return Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .flat()[0];
}
