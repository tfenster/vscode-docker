/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * This is the external face of extension.bundle.js, the main webpack bundle for the extension.
 * Anything needing to be exposed outside of the extension sources must be exported from here, because
 * everything else will be in private modules in extension.bundle.js.
 */

// Export activate/deactivate for main.js
export { activateInternal, deactivateInternal } from './src/extension';

// Exports for tests
// The tests are not packaged with the webpack bundle and therefore only have access to code exported from this file.
//
// The tests should import '../extension.bundle.ts'. At design-time they live in tests/ and so will pick up this file (extension.bundle.ts).
// At runtime the tests live in dist/tests and will therefore pick up the main webpack bundle at dist/extension.bundle.js.
export { configure, ConfigureApiOptions, ConfigureTelemetryProperties } from './src/configureWorkspace/configure';
export { ProcessProvider } from './src/debugging/coreclr/ChildProcessProvider';
export { DockerBuildImageOptions, DockerClient } from './src/debugging/coreclr/CliDockerClient';
export { CommandLineBuilder } from './src/debugging/coreclr/commandLineBuilder';
export { DotNetClient } from './src/debugging/coreclr/CommandLineDotNetClient';
export { compareBuildImageOptions, LaunchOptions } from './src/debugging/coreclr/dockerManager';
export { FileSystemProvider } from './src/debugging/coreclr/fsProvider';
export { LineSplitter } from './src/debugging/coreclr/lineSplitter';
export { OSProvider } from './src/debugging/coreclr/LocalOSProvider';
export { DockerDaemonIsLinuxPrerequisite, DockerfileExistsPrerequisite, DotNetSdkInstalledPrerequisite, LinuxUserInDockerGroupPrerequisite, MacNuGetFallbackFolderSharedPrerequisite } from './src/debugging/coreclr/prereqManager';
export { ext } from './src/extensionVariables';
export { getImageLabel, trimWithElipsis } from './src/tree/images/getImageLabel';
export { globAsync } from './src/utils/globAsync';
export { httpsRequestBinary } from './src/utils/httpRequest';
export { IKeytar } from './src/utils/keytar';
export { nonNullProp } from './src/utils/nonNull';
export { getDockerOSType, isWindows10RS3OrNewer, isWindows10RS4OrNewer, isWindows10RS5OrNewer } from "./src/utils/osUtils";
export { Platform, PlatformOS } from './src/utils/platform';
export { DefaultTerminalProvider } from './src/utils/TerminalProvider';
export { wrapError } from './src/utils/wrapError';
