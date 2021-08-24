/*
* Licensed to the O2Team under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

export const frameworkMeta: Record<string, {
  importFrameworkStatement: string
  mockAppStatement: string
  frameworkArgs: string
  creator: string
  importFrameworkName: string
  isNeedRawLoader?: boolean
  extraImportForWeb?: string
  execBeforeCreateWebApp?: string
  compatComponentImport?: string
  compatComponentExtra?: string
}> = {
  vue: {
    importFrameworkStatement: `
import Vue from 'vue';
`,
    mockAppStatement: `
const App = {
  render (h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}
`,
    frameworkArgs: 'Vue, config',
    creator: 'createVueApp',
    importFrameworkName: 'Vue',
    isNeedRawLoader: true,
    extraImportForWeb: `
require('@tarojs/components/dist-h5/vue')
`
  },
  vue3: {
    importFrameworkStatement: `
import { h, createApp } from 'vue'
`,
    mockAppStatement: `
const App = createApp({})
`,
    frameworkArgs: 'h, config',
    creator: 'createVue3App',
    importFrameworkName: 'h',
    isNeedRawLoader: true,
    extraImportForWeb: `
import { initVue3Components } from '@tarojs/components/dist-h5/vue3'
`,
    execBeforeCreateWebApp: `
initVue3Components(component)
`
  },
  nerv: {
    importFrameworkStatement: `
import Nerv from 'nervjs';
`,
    mockAppStatement: `
class App extends Nerv.Component {
  render () {
    return this.props.children
  }
}
`,
    frameworkArgs: 'Nerv, Nerv, config',
    creator: 'createReactApp',
    importFrameworkName: 'Nerv'
  },
  react: {
    importFrameworkStatement: `
import * as React from 'react'
import ReactDOM from 'react-dom'
`,
    mockAppStatement: `
class App extends React.Component {
  render () {
    return this.props.children
  }
}
`,
    frameworkArgs: 'React, ReactDOM, config',
    creator: 'createReactApp',
    importFrameworkName: 'React',
    compatComponentImport: 'import { PullDownRefresh } from "@tarojs/components"',
    compatComponentExtra: 'config.PullDownRefresh = PullDownRefresh'
  }
}
