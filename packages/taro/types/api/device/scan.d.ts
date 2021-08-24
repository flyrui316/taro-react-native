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

declare namespace Taro {
  namespace scanCode {
    interface Option {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: General.CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.CallbackResult) => void
      /** 是否只能从相机扫码，不允许从相册选择图片 */
      onlyFromCamera?: boolean
      /** 扫码类型 */
      scanType?: (keyof ScanType)[]
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void
    }
    interface SuccessCallbackResult extends General.CallbackResult {
        /** 所扫码的字符集 */
        charSet: string
        /** 当所扫的码为当前小程序二维码时，会返回此字段，内容为二维码携带的 path */
        path: string
        /** 原始数据，base64编码 */
        rawData: string
        /** 所扫码的内容 */
        result: string
        /** 所扫码的类型 */
        scanType: keyof QRType
        /** 调用结果 */
        errMsg: string
    }
    /** 扫码类型 */
    interface ScanType {
      /** 一维码 */
      barCode
      /** 二维码 */
      qrCode
      /** Data Matrix 码 */
      datamatrix
      /** PDF417 条码 */
      pdf417
    }
    /** 所扫码的类型 */
    interface QRType {
      /** 二维码 */
      QR_CODE
      /** 一维码 */
      AZTEC
      /** 一维码 */
      CODABAR
      /** 一维码 */
      CODE_39
      /** 一维码 */
      CODE_93
      /** 一维码 */
      CODE_128
      /** 二维码 */
      DATA_MATRIX
      /** 一维码 */
      EAN_8
      /** 一维码 */
      EAN_13
      /** 一维码 */
      ITF
      /** 一维码 */
      MAXICODE
      /** 二维码 */
      PDF_417
      /** 一维码 */
      RSS_14
      /** 一维码 */
      RSS_EXPANDED
      /** 一维码 */
      UPC_A
      /** 一维码 */
      UPC_E
      /** 一维码 */
      UPC_EAN_EXTENSION
      /** 二维码 */
      WX_CODE
      /** 一维码 */
      CODE_25
    }
  }
  /**
   * 调起客户端扫码界面，扫码成功后返回对应的结果
   * @supported weapp, h5
   * @example
   * ```tsx
   * // 允许从相机和相册扫码
   * Taro.scanCode({
   *   success: (res) => {
   *     console.log(res)
   *   }
   * })
   *       // 只允许从相机扫码
   * Taro.scanCode({
   *   onlyFromCamera: true,
   *   success: (res) => {
   *     console.log(res)
   *   }
   * })
   * ```
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html
   */
  function scanCode(option: scanCode.Option): Promise<scanCode.SuccessCallbackResult>
}
