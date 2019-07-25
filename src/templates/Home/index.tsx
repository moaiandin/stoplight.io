import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from '../../components/ActionBar';
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
  actionBar?: IActionBar;
}

export const Home: React.FunctionComponent<IHome> = ({
  color,
  hero,
  imageCallout,
  collage,
  testimonials,
  actionBar,
}) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} />

      <ImageCallout {...imageCallout} />

      <Collage id="customers" {...collage} />

      <Testimonials {...testimonials} />

      {actionBar && actionBar.enabled ? <ActionBar className="bg-grey-lightest" {...actionBar} /> : null}
    </Layout>
  );
};

export default withRouteData(Home);
