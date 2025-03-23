import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import {
  Hero,
  ImageAndText,
  CtaCards,
  FeatureShowcase,
  icons,
} from "@actsis/docusaurus-theme";
import { EsOsFreebies } from "../theme/sections/os-freebies";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName="es-footer-white"
    >
      <Hero
        title="ACTSIS Docs"
        subtitle="Un sitio web de documentación para servicios de ACTSIS."
        buttonLabel="Empezar"
        buttonUrl="#get-started"
        imageUrl={useBaseUrl(`img/homepage/w-logo.svg`)}
        gray
      />

      <ImageAndText
        title="BIENVENIDOS A UN MUNDO DE SOLUCIONES"
        imageUrl={useBaseUrl(`img/homepage/block-cards.svg`)}
        gray
      >
        <b>ACTSIS LTDA</b> es una empresa colombiana líder en la prestación de
        soluciones informáticas a empresas de servicios públicos, con más de 29
        años de experiencia.
        <br /> <br />
        Nuestra dedicación radica en ofrecer soluciones innovadoras, integrales
        y confiables, respaldadas por un equipo competente y comprometido con la
        constante actualización tecnológica. Estamos enfocados en el
        mejoramiento continuo y en la satisfacción total del cliente.
        Gestionamos los riesgos y las oportunidades con una visión estratégica
        del entorno, asegurando que cada paso que damos sea un paso hacia
        adelante.
        <br /> <br />
        ¡Nunca querrás volver atrás!
      </ImageAndText>

      {/* 			<div id='get-started'>
				<CtaCards
					title='Documentos'
					subtitle="Documentación más relevante."
					cards={[
						{
							icon: icons.puzzleOpenJob,
							text: 'Servicio de monitoreo',
							buttonLabel: 'Artemis',
							buttonUrl: '/docs/Artemis',
						}
					]}
				/>
			</div> */}
      <div id="get-started"></div>
      <FeatureShowcase
        title="Servicio de monitoreo"
        text="En cada instante y sin cesar,
				velamos por tu servicio, sin descansar.
				disponibilidad y rendimiento a la par,
				tu mejor experiencia queremos garantizar."
        buttonUrl="/docs/Artemis"
        imageUrl={useBaseUrl(`img/homepage/block-editor.webp`)}
        gray
        sticky
      />
      <EsOsFreebies />
    </Layout>
  );
}
