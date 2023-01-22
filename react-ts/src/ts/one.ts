// 结构类型系统
// https://www.jianshu.com/p/79053769675d
interface Point2 {
  x: number;
  y: number;
};

interface Point3 {
  x: number;
  y: number;
  z: number;
};

let a: Point3 = { x: 1, y: 2, z: 3 };

function getPoint(point: Point2) {
  console.log(a.x);
}

getPoint(a);

export {};
