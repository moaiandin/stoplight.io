import * as React from 'react';
import { withRouteData } from 'react-static';
import { DocPlans, IDocPlans } from '../../components/DocPlans';
import { G2Widget } from '../../components/G2Widget';
import { Hero, IHero } from '../../components/Hero';
import { Layout } from '../../components/Layout';
import { IPricingPlan, PricingPlans } from '../../components/PricingPlans';

export interface IPricing {
  color: string;
  hero: IHero;
  plans: IPricingPlan[];
  docPlans: IDocPlans;
}

export const Pricing: React.FunctionComponent<IPricing> = ({ color, hero, plans, docPlans }) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} skew="7deg" containerClassName="pb-64" />
      <PricingPlans color={color} plans={plans} />
      <DocPlans {...docPlans} />
      <G2Widget />
    </Layout>
  );
};

export default withRouteData(Pricing);
