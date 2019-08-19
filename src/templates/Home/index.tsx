import * as React from 'react';
import { withRouteData } from 'react-static';

import { ProductCards } from 'src/components/ProductCard';
import { Collage, ICollage } from '../../components/Collage';
import { GartnerCoolVendor, IGartnerCoolVendor } from '../../components/GartnerCoolVendor';
import { Hero, IHero } from '../../components/Hero';
import { IImageCallout, ImageCallout } from '../../components/ImageCallout';
import { Layout } from '../../components/Layout';
import { ITestimonials, Testimonials } from '../../components/Testimonials';

export interface IHome {
  color: string;
  hero: IHero;
  imageCallout: IImageCallout;
  collage: ICollage;
  testimonials: ITestimonials;
  gartnerCoolVendor: IGartnerCoolVendor;
}

export const Home: React.FunctionComponent<IHome> = ({
  color,
  hero,
  imageCallout,
  collage,
  testimonials,
  gartnerCoolVendor,
}) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero}>
        <ProductCards className="pt-32" />
      </Hero>

      <ImageCallout {...imageCallout} />

      <Collage id="customers" {...collage} />

      <GartnerCoolVendor {...gartnerCoolVendor} />

      <Testimonials {...testimonials} />
    </Layout>
  );
};

export default withRouteData(Home);
