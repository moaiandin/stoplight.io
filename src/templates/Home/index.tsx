import * as React from 'react';
import { withRouteData } from 'react-static';

import { Collage, ICollage } from '../../components/Collage';
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
}

export const Home: React.FunctionComponent<IHome> = ({ color, hero, imageCallout, collage, testimonials }) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} />

      <ImageCallout {...imageCallout} />

      <Collage id="customers" {...collage} />

      <Testimonials {...testimonials} />
    </Layout>
  );
};

export default withRouteData(Home);
