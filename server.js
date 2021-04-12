const express = require("express");
const Queue = require("./queue");
const app = express();
const map = require("./map");

const PORT = process.env.PORT || 5000;

app.use(express.json());

const bfsSearch = (destination) => {
  let route = [];
  const queue = new Queue();

  queue.enqueue(map["USA"]);

  while (!queue.isEmpty()) {
    const curr = queue.peek();

    if (curr.right !== null) {
      queue.enqueue(map[curr.right]);
    }

    if (curr.value === destination) {
      route.push(curr.value);
      return route;
    }
    if (curr.left !== null) {
      queue.enqueue(map[curr.left]);
    }
    queue.dequeue();
    if (curr.right !== null || curr.left !== null) {
      route.push(curr.value);
    }

  }
};

app.get('/:dest', (req, res) => {
  const dest = req.params.dest;
  let route;
  try {
    route = bfsSearch(dest);
    if(route.length == 0) res.json({error: `${dest} is not an appropriate input`})
  } catch (error) {
    res.json({error: `${dest} is not an appropriate input`});
  }
  return res.json({destination: dest, list: route});
});

app.use((req, res, next) => {
  res.json({error: 'You must include destination at the end of the url, for example: /PAN'})
})


app.listen(PORT, () => {
  console.log("Listening on " + PORT + "...");
});
