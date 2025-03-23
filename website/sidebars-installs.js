module.exports = {
  installs: [
    "iis-instalacion",
    {
      type: "category",
      label: "Dotnet",
      items: [
        {
          type: "doc",
          label: "Prerrequisitos",
          id: "dotnet-8/dotnet-8-prerequisitos",
        },
        {
          type: "category",
          label: "Con Gateway",
          items: [
            {
              type: "category",
              label: "Despliegue",
              items: [
                "dotnet-8/default/despliegue/it_net8_desploy_step1",
                "dotnet-8/default/despliegue/it_net8_deploy_variables",
              ],
            },
            {
              type: "doc",
              id: "dotnet-8/default/pruebas/it_net8_pruebas",
            },
          ],
        },
        {
          type: "category",
          label: "Sin Gateway",
          items: [
            {
              type: "category",
              label: "Despliegue",
              items: [
                "dotnet-8/sin_gateway/despliegue/it_net8_desploy_step1_sin_gateway",
                "dotnet-8/sin_gateway/despliegue/it_net8_deploy_variables_sin_gateway",
              ],
            },
            {
              type: "doc",
              id: "dotnet-8/sin_gateway/pruebas/it_net8_pruebas_sin_gateway",
            },
          ],
        },
      ],
    },
  ],
};
