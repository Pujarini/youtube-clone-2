const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function generateMessage(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

var nameList = ["Time", "Past", "Future", "Dev", "Fly", "Flying", "Soar"];

export function generateName() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}
