/**
 * @file 项目配置
 */

module.exports = {
    /**
     * 需要单独打包的第三方库
     * 例如: {lib: ['react', 'react-dom']}
     * 会把'react'和'react-dom'打包到lib.js
     */
    library: {
        lib: ['react', 'react-dom', 'redux', 'react-redux']
    },
    /**
     * 业务代码入口
     */
    entry: {
        demo5: 'src/page/demo5/index'
    },
    /**
     * 别名
     */
    alias: {
        'const': 'src/constant',
        'comp': 'src/components'
    },
    supportIE8: true
};
