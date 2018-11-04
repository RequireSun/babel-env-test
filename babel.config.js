'use strict';

// 根本不会翻译箭头函数
// const config = {
//   "presets": [
//     [
//       "@babel/env",
//       {
//         "targets": {
//           "edge": "17",
//           "firefox": "60",
//           "chrome": "67",
//           "safari": "11.1",
//         },
//         "useBuiltIns": "usage"
//       }
//     ]
//   ]
// };

// 会翻译箭头函数, 但不会翻译 filter
const config = {
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "browsers": [ ">0.25%" ]
        }
      }
    ]
  ]
};

// 会翻译箭头函数和 filter
// const config = {
//   "presets": [
//     [
//       "@babel/env",
//       {
//         "targets": {
//           "browsers": [ ">0.01%" ]
//         },
//         "useBuiltIns": "usage"
//       }
//     ]
//   ]
// };

module.exports = config;