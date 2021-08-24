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

import { ComponentType } from 'react'
import { StandardProps } from './common'

interface IconProps extends StandardProps {
  /** icon 的类型
   * @supported weapp, swan, alipay, tt, h5, rn
   */
  type: keyof IconProps.TIconType

  /** icon 的大小，单位px
   * @default 23
   * @supported weapp, swan, alipay, tt, h5, rn
   */
  size?: string,

  /** icon 的颜色，同 css 的 color
   * @supported weapp, swan, alipay, tt, h5, rn
   */
  color?: string
}

declare namespace IconProps {
  /** icon 的类型 */
  interface TIconType {
    /** 成功图标 */
    success
    /** 成功图标（不带外圈） */
    success_no_circle
    /** 信息图标 */
    info
    /** 警告图标 */
    warn
    /** 等待图标 */
    waiting
    /** 取消图标 */
    cancel
    /** 下载图标 */
    download
    /** 搜索图标 */
    search
    /** 清除图标 */
    clear
    /** 圆环图标(多选控件图标未选择)「微信文档未标注属性」 */
    circle
    /** 带圆环的信息图标「微信文档未标注属性」 */
    info_circle
  }
}

/** 图标。组件属性的长度单位默认为 px
 * @classification base
 * @supported weapp, swan, alipay, tt, h5, rn
 * @example
 * ```tsx
 * export default class PageView extends Component {
 *   constructor() {
 *     super(...arguments)
 *   }
 *
 *   render() {
 *     return (
 *       <View className='components-page'>
 *         <Icon size='60' type='success' />
 *         <Icon size='60' type='info' />
 *         <Icon size='60' type='warn' color='#ccc' />
 *         <Icon size='60' type='warn' />
 *         <Icon size='60' type='waiting' />
 *         <Icon size='20' type='success_no_circle' />
 *         <Icon size='20' type='warn' />
 *         <Icon size='20' type='success' />
 *         <Icon size='20' type='download' />
 *         <Icon size='20' type='clear' color='red' />
 *         <Icon size='20' type='search' />
 *       </View>
 *     )
 *   }
 * }
 * ```
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/icon.html
 */
declare const Icon: ComponentType<IconProps>

export { Icon, IconProps }
