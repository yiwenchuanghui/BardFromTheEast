function secsToMins(time) {
  const int = Math.floor(time);
  const mins = Math.floor(int / 60);
  const secs = int % 60;
  const newTime = `${ mins }:${ `0${ secs }`.slice(-2) }`;

  return newTime;
}

module.export = secsToMins;
