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

import * as fs from 'fs'
import * as babel from '@babel/core'

jest.mock('sass', () => {
  const originalModule = jest.requireActual('node-sass')
  return {
    __esModule: true,
    ...originalModule,
    printLog () {}
  }
})

jest.mock('@tarojs/helper', () => {
  const originalModule = jest.requireActual('@tarojs/helper')
  return {
    __esModule: true,
    ...originalModule,
    readConfig: (configPath: string) => {
      if (fs.existsSync(configPath)) {
        if (/\.json$/.test(configPath)) {
          return require(configPath)
        } else if (/\.(js|ts)$/.test(configPath)) {
          const res = babel.transformFileSync(configPath, {
            presets: [['@babel/env']],
            plugins: ['@babel/plugin-proposal-class-properties']
          })
          // eslint-disable-next-line no-eval
          return eval(res!.code as string)
        }
      }
      return {}
    }
  }
})
