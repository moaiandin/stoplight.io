import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { Collage, ICollage } from '../../components/Collage';
import { GartnerCoolVendor, IGartnerCoolVendor } from '../../components/GartnerCoolVendor';
import { Hero, IHero } from '../../components/Hero';
import { IImageCallout, ImageCallout } from '../../components/ImageCallout';
import { Layout } from '../../components/Layout';
import { ProductCard } from '../../components/ProductCard';
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
      <Hero bgColor={color} {...hero} bottomElem={<ProductCards className="pt-24 sm:pt-6" />} />

      <ImageCallout {...imageCallout} />

      <Collage id="customers" {...collage} />

      <GartnerCoolVendor {...gartnerCoolVendor} />

      <Testimonials {...testimonials} />
    </Layout>
  );
};

export default withRouteData(Home);

const ProductCards = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, 'container relative z-5 flex justify-between text-left sm:flex-col sm:items-center')}>
      <ProductCard
        tag="design"
        name="Stoplight Studio"
        title="Next gen editor for API design & technical docs"
        description="Stoplight Studio turns you into an API Design superhero. Create OpenAPI 10x faster, with no prior knowledge, and no mistakes."
        color="blue"
        icon={['fad', 'paint-brush-alt']}
        className="bg-grey-lightest bg-white w-1/2 mx-3 sm:w-full sm:mb-6"
        href="/studio"
        image="/images/studio-glimpse.png"
      />

      <ProductCard
        tag="scale"
        name="Stoplight Enterprise"
        title="API design management at scale"
        description="The Stoplight Platform increases consistency, visibility, and quality across your internal and external APIs."
        color="indigo"
        icon={['fad', 'chart-network']}
        className="bg-white w-1/2 mx-3 sm:w-full"
        href="/enterprise"
        image="/images/platform-glimpse.png"
      />
    </div>
  );
};
