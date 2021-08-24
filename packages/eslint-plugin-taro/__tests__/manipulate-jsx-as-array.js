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

const rule = require('../rules/manipulate-jsx-as-array')
const { RuleTester } = require('eslint')
const { parserOptions, testValid, testInvalid } = require('../utils/utils')

const ruleTester = new RuleTester({ parserOptions })

const ERROR_MESSAGE = '不能使用 Array#map 之外的方法操作 JSX 数组'

ruleTester.run('manipulate-jsx-as-array', rule, {
  valid: testValid([
    'numbers.map((number) => number * 2)',
    `numbers.map((number) => {
      return number * 2
    })`,
    `numbers.map((number) => {
      const element = <View />
      return number * 2
    })`,
    `numbers.map((number) => {
      const element = <View />
      return <View />
    })`,
    `numbers.map((number) => {
      const element = <View />
      let a = null
      if (number) {
        a = 'test'
      }
      return <View />
    })`,
    `numbers.filter(Boolean).map((number) => {
      const element = <View />
      return <View />
    })`
  ]),
  invalid: testInvalid(ERROR_MESSAGE, [
    'test.push(<View />)',
    `numbers.forEach(numbers => {
      a = <View />
    })`,
    'test.shift(<View />)',
    `components.find(component => {
      return component === <View />
    })`,
    'components.fill(<View />)',
    'components.some(component => component.constructor === <View />)'
  ])
})
