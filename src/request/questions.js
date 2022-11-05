export default [
  {
    ques: 'NaN === NaN',
    resp: "false",
  },
  {
    ques: '2++',
    resp: 'SintaxError',
  },
  {
    ques: 'NaN++',
    resp: 'NaN',
  },
  {
    ques: 'undefined + false',
    resp: "NaN",
  },
  {
    ques: 'null + 0',
    resp: "0",
  },
  {
    ques: '0/0',
    resp: "NaN",
  },
  {
    ques: "+Number(100) - 1/0",
    resp: "-Infinity",
  },
  {
    ques: 'NaN + [false,true,1000]',
    resp: 'NaNfalse,true,1000',
  },
  {
    ques: 'NaN + Number(999)',
    resp: "NaN",
  },
  {
    ques: '"" + + ","',
    resp: "NaN",
  },
  {
    ques: '" " + + " "',
    resp: '"0"',
  },
  {
    ques: '- "" + + "1" * null - [,]',
    resp: '0',
  }
];
