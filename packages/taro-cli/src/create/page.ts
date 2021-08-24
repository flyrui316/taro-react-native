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

import * as path from 'path'
import * as fs from 'fs-extra'
import { DEFAULT_TEMPLATE_SRC, TARO_CONFIG_FLODER, TARO_BASE_CONFIG, getUserHomeDir, chalk } from '@tarojs/helper'

import Creator from './creator'
import { createPage } from './init'
import fetchTemplate from './fetchTemplate'

export interface IPageConf {
  projectDir: string;
  projectName: string;
  template: string;
  description?: string;
  pageName: string;
  css: 'none' | 'sass' | 'stylus' | 'less';
  typescript?: boolean;
  date?: string;
  framework: 'react' | 'nerv' | 'vue' | 'vue3'
}

export default class Page extends Creator {
  public rootPath: string
  public conf: IPageConf

  constructor (options: IPageConf) {
    super()
    this.rootPath = this._rootPath

    this.conf = Object.assign(
      {
        projectDir: '',
        projectName: '',
        template: '',
        description: ''
      },
      options
    )
    this.conf.projectName = path.basename(this.conf.projectDir)
  }

  getPkgPath () {
    const projectDir = this.conf.projectDir as string
    let pkgPath = path.join(projectDir, 'package.json')
    if (!fs.existsSync(pkgPath)) {
      // 适配 云开发 项目
      pkgPath = path.join(projectDir, 'client', 'package.json')
      if (!fs.existsSync(pkgPath)) {
        console.log(chalk.yellow('请在项目根目录下执行 taro create 命令!'))
        process.exit(0)
      }
    }
    return pkgPath
  }

  getTemplateInfo () {
    const pkg = fs.readJSONSync(this.getPkgPath())
    const templateInfo = pkg.templateInfo || {
      name: 'default',
      css: 'none',
      typescript: false
    }

    // set template name
    templateInfo.template = templateInfo.name
    delete templateInfo.name

    this.conf = Object.assign(this.conf, templateInfo)
  }

  async fetchTemplates () {
    const homedir = getUserHomeDir()
    let templateSource = DEFAULT_TEMPLATE_SRC
    if (!homedir) chalk.yellow('找不到用户根目录，使用默认模版源！')

    const taroConfigPath = path.join(homedir, TARO_CONFIG_FLODER)
    const taroConfig = path.join(taroConfigPath, TARO_BASE_CONFIG)

    if (fs.existsSync(taroConfig)) {
      const config = await fs.readJSON(taroConfig)
      templateSource = config && config.templateSource ? config.templateSource : DEFAULT_TEMPLATE_SRC
    } else {
      await fs.createFile(taroConfig)
      await fs.writeJSON(taroConfig, { templateSource: DEFAULT_TEMPLATE_SRC })
      templateSource = DEFAULT_TEMPLATE_SRC
    }

    // 从模板源下载模板
    await fetchTemplate(templateSource, this.templatePath(''))
  }

  async create () {
    const date = new Date()
    this.getTemplateInfo()
    this.conf.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    if (!fs.existsSync(this.templatePath(this.conf.template))) {
      await this.fetchTemplates()
    }

    this.write()
  }

  write () {
    createPage(this, this.conf, () => {
      console.log(`${chalk.green('✔ ')}${chalk.grey(`创建页面 ${this.conf.pageName} 成功！`)}`)
    }).catch(err => console.log(err))
  }
}
