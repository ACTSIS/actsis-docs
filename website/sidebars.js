module.exports = {
    docs: [
        // 1) Documento suelto en la raíz de /docs (ej: actsis.mdx => id: 'actsis')
        'actsis',

        // 2) Categoría "IT"
        {
            type: 'category',
            label: 'IT',
            items: [
                // Documento "IT/it_index" en la raíz de /docs/IT
                'IT/it_index',

                // Nueva categoría "dotnet" dentro de IT
                {
                    type: 'category',
                    label: 'dotnet',
                    items: [
                        // Un doc: prerequisitos
                        {
                            type: 'doc',
                            label: 'Prerequisitos',
                            id: 'IT/dotnet-8/prerequisitos/it_net8_requirements_index',
                        },
                        // Categoría: despliegue
                        {
                            type: 'category',
                            label: 'Despliegue',
                            items: [
                                'IT/dotnet-8/despliegue/it_net8_desploy_step1',
                                'IT/dotnet-8/despliegue/it_net8_deploy_variables',
                            ],
                        },
                        // Un doc: pruebas
                        {
                            type: 'doc',
                            id: 'IT/dotnet-8/pruebas/it_net8_pruebas',
                        },
                    ],
                },
            ],
        },


        {
            type: 'category',
            label: 'Artemis',
            items: [
                'artemis/Artemis',

                {
                    type: 'category',
                    label: 'Conceptos básicos',
                    items: [
                        'artemis/basics/grafana-concepts',
                        {
                            type: 'category',
                            label: 'Alertas',
                            items: [
                                'artemis/content/alerts-email'
                            ]
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Dashboards',
                    items: [
                        'artemis/content/dashboard-monitoreo',
                        'artemis/content/dashboard-performance'
                    ]
                }
            ],


        },
    ],
};
