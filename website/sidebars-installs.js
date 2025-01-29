module.exports = {
    installs: [
        'welcome',
        {
            type: 'category',
            label: 'dotnet',
            items: [
                {
                    type: 'doc',
                    label: 'Prerequisitos',
                    id: 'dotnet-8/prerequisitos/it_net8_requirements_index',
                },
                {
                    type: 'category',
                    label: 'Despliegue',
                    items: [
                        'dotnet-8/despliegue/it_net8_desploy_step1',
                        'dotnet-8/despliegue/it_net8_deploy_variables',
                    ],
                },
                {
                    type: 'doc',
                    id: 'dotnet-8/pruebas/it_net8_pruebas',
                },
            ],
        },
    ]
}
