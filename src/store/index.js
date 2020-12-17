/*
 * @Author: your name
 * @Date: 2020-12-17 16:41:29
 * @LastEditTime: 2020-12-17 16:58:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuemould\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getter from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./moudles', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulepath)=>{
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
},{})

const store = new Vuex.Store({
    modules,
    getter
})

export default store