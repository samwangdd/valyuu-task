module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 1440, // 视口的宽度
      viewportHeight: 667, // 视口的高度
      unitPrecision: 3, // 转换后的小数位数
      viewportUnit: 'vw', // 转换的视口单位
      selectorBlackList: ['ignore'], // 需要忽略转换的类名
      minPixelValue: 1, // 小于或等于 1 像素不转换
      mediaQuery: false, // 是否在媒体查询中也进行转换
    },
  },
};
