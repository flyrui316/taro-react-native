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

/**
 * Container
 */

import * as React from 'react'
import {
  View
} from 'react-native'
import styles from './styles'
import { ContainerProps } from './PropsType'

const TabbarContainer: React.FC<ContainerProps> = ({
  children,
  style,
  ...reset
}: ContainerProps) => {
  return (
    <View {...reset} style={[styles.container, style]}>
      {children}
    </View>
  )
}

TabbarContainer.displayName = 'TabbarContainer'

export default TabbarContainer
