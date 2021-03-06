/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ContainerRegistryManagementClient } from 'azure-arm-containerregistry';
import { Progress } from 'vscode';
import { ext } from 'vscode-azureappservice/out/src/extensionVariables';
import { AzureWizardExecuteStep, createAzureClient } from 'vscode-azureextensionui';
import { nonNullProp } from '../../../../utils/nonNull';
import { IAzureRegistryWizardContext } from './IAzureRegistryWizardContext';

export class AzureRegistryCreateStep extends AzureWizardExecuteStep<IAzureRegistryWizardContext> {
    public priority: number = 130;

    public async execute(context: IAzureRegistryWizardContext, progress: Progress<{ message?: string; increment?: number }>): Promise<void> {
        const newRegistryName = nonNullProp(context, 'newRegistryName');

        const client = createAzureClient(context, ContainerRegistryManagementClient);
        const creating: string = `Creating registry "${newRegistryName}"...`;
        ext.outputChannel.appendLine(creating);
        progress.report({ message: creating });

        const location = nonNullProp(context, 'location');
        const resourceGroup = nonNullProp(context, 'resourceGroup');
        context.registry = await client.registries.create(
            nonNullProp(resourceGroup, 'name'),
            newRegistryName,
            {
                sku: {
                    name: nonNullProp(context, 'newRegistrySku')
                },
                location: nonNullProp(location, 'name')
            }
        );

        const created = `Successfully created registry "${newRegistryName}".`;
        ext.outputChannel.appendLine(created);
    }

    public shouldExecute(context: IAzureRegistryWizardContext): boolean {
        return !context.registry;
    }
}
