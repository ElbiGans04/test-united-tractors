const intervals = [7, 5, 6];

function tebakNomorLantai(nomor) {
  let nomorLantai = 1;
  let value = 1;

  while (true) {
    const kind = nomorLantai - (nomorLantai - (nomorLantai % 3));
    const interval = intervals[kind];

    if ((value <= nomor) && ((value - 1) + interval >= nomor)) return nomorLantai

    value += interval;
    nomorLantai++;
  }
}

console.log(tebakNomorLantai(19));
