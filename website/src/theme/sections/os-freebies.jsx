import React from "react";
import { CtaImageButton } from "@actsis/docusaurus-theme";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const EsOsFreebies = (props) => {
  return (
    <CtaImageButton
      {...props}
      title="Encuentra más información acerca de nosotros."
      buttonLabel="Nuestros productos"
      buttonUrl="https://www.actsis.com/#productos"
      imageUrl={useBaseUrl(`img/homepage/actsis-productos.svg`)}
    />
  );
};
