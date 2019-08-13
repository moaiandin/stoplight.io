import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Collage, ICollage } from '../../components/Collage';
import { FeatureSection, IFeatureSection } from '../../components/FeatureSection';
import { Hero, IHero } from '../../components/Hero';
import { IHeroButton } from '../../components/Hero/HeroButton';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { IImageCallout, ImageCallout } from '../../components/ImageCallout';
import { Layout } from '../../components/Layout';
import { IRelatedPage, RelatedPages } from '../../components/RelatedPages';
import { Section } from '../../components/Section';
import { slugify } from '../../utils/slugify';

export interface ILanding {
  color: string;
  hero: IHero;
  imageCallout: IImageCallout;
  collage: ICollage;
  featureSection: IFeatureSection;
  actionBar: IActionBar;
  hubspot: IHubSpotForm & { title?: string; description?: string };
  relatedPages?: IRelatedPage[];
}

export const Landing: React.FunctionComponent<ILanding> = ({
  color,
  hero,
  imageCallout,
  collage,
  featureSection,
  actionBar,
  hubspot,
  relatedPages,
}) => {
  let buttons: IHeroButton[] = [];
  if (featureSection && featureSection.features && featureSection.features.length) {
    buttons = featureSection.features.map(feature => ({
      title: feature.shortName,
      icon: 'check-circle',
      href: `#${slugify(feature.title)}`,
    }));
  }

  return (
    <Layout>
      <Hero bgColor={color} buttons={buttons} {...hero} />

      <ImageCallout {...imageCallout} />

      <FeatureSection color={color} {...featureSection} />

      {actionBar && actionBar.enabled ? <ActionBar {...actionBar} /> : null}

      <Collage className="md:px-0 py-6 md:py-6" noPadding {...collage} />

      {hubspot && (
        <Section key="hubspot" id="demo">
          <div className="container flex items-center justify-center">
            <div className="w-full">
              {hubspot.title && <h2 className="text-3xl text-center">{hubspot.title}</h2>}

              {hubspot.description && (
                <div className="flex justify-center flex-wrap items-center pb-12 md:pb-12">
                  <div
                    className="font-default opacity-75 text-xl max-w-lg mt-4 md:mt-6 mx-auto text-center"
                    dangerouslySetInnerHTML={{ __html: hubspot.description }}
                  />
                </div>
              )}

              <HubSpotForm className="p-16 md:p-4" portalId={hubspot.portalId} formId={hubspot.formId} />
            </div>
          </div>
        </Section>
      )}

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}
    </Layout>
  );
};

export default withRouteData(Landing);
