
module.exports =
{
  "default":
  [
    { "type": "polygon", "color": {"red": 80, "green": 80, "blue": 80}, "points": [ [ 0, 0 ], [ 0, 750 ], [ 10, 500 ], [ 35, 100 ], [ 150, 40 ], [ 400, 10 ], [ 800, 10 ], [ 1050, 40 ], [ 1165, 100 ], [ 1190, 500 ], [ 1200, 750 ], [ 1200, 0 ] ] }
  ],

  "pitch1":
  [
    { "type": "polygon", "color": {"red": 80, "green": 80, "blue": 80}, "points": [ [ 0, 0 ], [ 0, 750 ], [ 10, 500 ], [ 35, 100 ], [ 150, 40 ], [ 400, 10 ], [ 800, 10 ], [ 1050, 40 ], [ 1165, 100 ], [ 1190, 500 ], [ 1200, 750 ], [ 1200, 0 ] ] },
    { "type": "convex", "color": {"red": 80, "green": 80, "blue": 80}, "vertices": [ [ 300, 200 ], [ 500, 200 ], [ 500, 250 ], [ 300, 250 ] ] },
    { "type": "convex", "color": {"red": 80, "green": 80, "blue": 80}, "vertices": [ [ 700, 200 ], [ 900, 200 ], [ 900, 250 ], [ 700, 250 ] ] }
  ],

  "pitch2":
  [
    { "type": "polygon", "color": {"red": 80, "green": 80, "blue": 80}, "points": [ [ 0, 0 ], [ 0, 750 ], [ 10, 500 ], [ 35, 100 ], [ 150, 40 ], [ 400, 10 ], [ 800, 10 ], [ 1050, 40 ], [ 1165, 100 ], [ 1190, 500 ], [ 1200, 750 ], [ 1200, 0 ] ] },
    { "type": "circle", "color": {"red": 80, "green": 80, "blue": 80}, "x": 600, "y": 0, "diameter": 11 }
  ],

  "pitch3":
  [
    { "type": "polygon", "color": {"red": 0, "green": 0, "blue": 0}, "points": [ [ 0, 0 ], [ 0, 750 ], [ 10, 500 ], [ 35, 100 ], [ 150, 40 ], [ 400, 10 ], [ 800, 10 ], [ 1050, 40 ], [ 1165, 100 ], [ 1190, 500 ], [ 1200, 750 ], [ 1200, 0 ] ] },
    { "type": "circle", "color": {"red": 0, "green": 30, "blue": 100}, "x": 0, "y": 0, "diameter": 11 },
    { "type": "circle", "color": {"red": 100, "green": 30, "blue": 0}, "x": 1200, "y": 0, "diameter": 11 }
  ]
}