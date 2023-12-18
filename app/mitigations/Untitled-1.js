const s = [104, 116, 116, 112, 115, 58, 47, 47];

const d = ['Z3JvdXBz', 'Y29tbXVuaXR5', 'c2Fw', 'Y29t'];
const p = [
  '5t',
  'stsop-golb-dehcet-pas',
  'seitrap-toug-edoc-dna-hctaw-touq-ytinumoc-pas',
  'p-ab',
  '600772',
];

console.log([
    String.fromCharCode(...s),

    d.map((x) => Buffer.from(x, 'base64').toString('ascii')).join('.'),
    p.reduce((a, x) => `${a}/${x.split('').reverse().join('')}`, ''),
  ].join('')
);
