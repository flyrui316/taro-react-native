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

import { processTypeEnum } from './constants';
export declare function normalizePath(path: string): string;
export declare const isNodeModule: (filename: string) => boolean;
export declare function isNpmPkg(name: string): boolean;
export declare function isQuickAppPkg(name: string): boolean;
export declare function isAliasPath(name: string, pathAlias?: object): boolean;
export declare function replaceAliasPath(filePath: string, name: string, pathAlias?: object): string;
export declare function promoteRelativePath(fPath: string): string;
export declare function resolveStylePath(p: string): string;
export declare function printLog(type: processTypeEnum, tag: string, filePath?: string): void;
export declare function recursiveFindNodeModules(filePath: string): string;
export declare function getUserHomeDir(): string;
export declare function getTaroPath(): string;
export declare function getConfig(): object;
export declare function getSystemUsername(): string;
export declare function shouldUseYarn(): boolean;
export declare function shouldUseCnpm(): boolean;
export declare function isEmptyObject(obj: any): boolean;
export declare function resolveScriptPath(p: string): string;
export declare function generateEnvList(env: object): object;
export declare function generateConstantsList(constants: object): object;
export declare function cssImports(content: string): string[];
export declare function emptyDirectory(dirPath: string, opts?: {
    excludes: string[];
}): void;
export declare const pascalCase: (str: string) => string;
export declare function getInstalledNpmPkgPath(pkgName: string, basedir: string): string | null;
export declare function getInstalledNpmPkgVersion(pkgName: string, basedir: string): string | null;
export declare const recursiveMerge: <T = any>(src: Partial<T>, ...args: (Partial<T> | undefined)[]) => any;
export declare const mergeVisitors: (src: any, ...args: any[]) => any;
export declare const applyArrayedVisitors: (obj: any) => any;
export declare function unzip(zipPath: any): Promise<unknown>;
export declare function getBabelConfig(babel: any): any;
export declare const getAllFilesInFloder: (floder: string, filter?: string[]) => Promise<string[]>;
export interface FileStat {
    name: string;
    isDirectory: boolean;
    isFile: boolean;
}
export declare function readDirWithFileTypes(floder: string): FileStat[];
export declare function extnameExpRegOf(filePath: string): RegExp;
export declare function addPlatforms(platform: string): void;
export declare const getModuleDefaultExport: (exports: any) => any;
export declare const removeHeadSlash: (str: string) => string;
export declare const readConfig: (configPath: string) => any;
