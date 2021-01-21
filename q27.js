let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function allProperty(object, prop) {
  let result = [];
  for (let obj of object) {
    if (obj.hasOwnProperty(prop)) {
      result.push(obj[prop]);
    } else {
      result.push("not exist");
    }
  }
  console.log(result);
}
console.log("src -> (library, 'title')");
allProperty(library, "title");
