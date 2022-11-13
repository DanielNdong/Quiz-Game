export default [
  {
    a: "TypeError",
    b: "false",
    c: "true",
    d: "SintaxError",
  },
  {
    a: "SintaxError",
    c: "NaN",
    b: "TypeError",
    d: "NullPointerException",
  },
  {
    c: "NaN",
    b: "SintaxError",
    d: '"NaN"',
    a: '"NaN+"',
  },
  {
    a: "0",
    b: "true",
    c: "false",
    d: "SintaxError",
  },
  {
    b: "SintaxError",
    c: '"0"',
    d: "undefined",
    a: "0",
  },
  {
    a: "Infinity",
    b: "MathError",
    c: "0",
    d: "NaN",
  },
  {
    c: "NaN",
    a: "SintaxError",
    b: "-Infinity",
    d: "0",
  },
  {
    b: "NaNfalse,true,1000",
    d: "0",
    c: "NaN",
    a: "SintaxError",
  },
  {
    a: "NaN",
    d: "undefined",
    b: "999",
    c: '"Number(999)"',
  },
  {
    b: "1",
    c: "0",
    a: "SintaxError",
    d: "NaN",
  },
  {
    b: "0",
    c: "null",
    a: "SintaxError",
    d: '"0"',
  },
  {
    c: "undefined",
    b: "0",
    a: "NaN",
    d: "I Give Up",
  },
];
