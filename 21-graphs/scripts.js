let svg = document.getElementById("svg");
let polyline = document.getElementById("polyline");
let coords = [
  [00, 120],
  [20, 60],
  [40, 80],
  [60, 20],
  [80, 80],
  [100, 80],
  [120, 60],
  [140, 100],
  [160, 90],
  [180, 80],
  [200, 110],
  [220, 10],
  [240, 70],
  [260, 100],
  [280, 100],
  [300, 40],
  [320, 0],
  [340, 100],
  [360, 100],
  [380, 120],
  [400, 60],
  [420, 70],
  [440, 80],
];

let generateGraph = () => {
  polyline.points.clear();
  let svgPoints = svg.createSVGPoint();

  for (let i = 0; i < coords.length; i++) {
    svgPoints.x = coords[i][0];
    svgPoints.y = coords[i][1];
    polyline.points.appendItem(svgPoints);
  }

  polyline.points.removeItem(0);
};

let randomNumGen = (max) => {
  return Math.floor(Math.random() * max);
};

let addCoordinate = () => {
  let x = randomNumGen(500);
  let y = randomNumGen(120);
  let coordinate = [x, y];
  for (let i = 0; i < coords.length; i++) {
    if (x <= coords[i][0]) {
      coords.splice(i, 0, coordinate);
      break;
    }
  }
  console.log(coords);
  generateGraph();
};

generateGraph();
