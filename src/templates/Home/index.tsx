import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { CustomerSection } from '../../components/CustomerSection';
import { Hero, IHero } from '../../components/Hero';
import { IImage } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { ProductCard } from '../../components/ProductCard';
import { ITestimonials, Testimonials } from '../../components/Testimonials';

export interface IHome {
  color: string;
  hero: IHero;
  testimonials: ITestimonials;
  actionBar?: IActionBar;
  customers?: {
    images: IImage[];
  };
}

export const Home: React.FunctionComponent<IHome> = ({ color, hero, testimonials, actionBar, customers }) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} bottomElem={<ProductCards className="pt-24 sm:pt-6" />} />

      {customers && <CustomerSection images={customers.images} />}

      <Testimonials {...testimonials} />

      {actionBar && actionBar.enabled ? <ActionBar {...actionBar} /> : null}
    </Layout>
  );
};

export default withSiteData(withRouteData(Home));

const ProductCards = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, 'container relative z-5 flex justify-between text-left sm:flex-col sm:items-center')}>
      <ProductCard
        tag="design"
        name="Stoplight Studio"
        title="Next gen editor for API design & technical docs"
        description="Stoplight Studio turns you into an API Design superhero. Create OpenAPI 10x faster, with no prior knowledge and fewer mistakes."
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
        color="orange"
        icon={['fad', 'chart-network']}
        className="bg-white w-1/2 mx-3 sm:w-full"
        href="/enterprise"
        image="/images/platform-glimpse.png"
      />
    </div>
  );
};
