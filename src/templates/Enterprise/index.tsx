import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Container } from '../../components/Container';
import { CustomerSection } from '../../components/CustomerSection';
import { GartnerCoolVendor, IGartnerCoolVendor } from '../../components/GartnerCoolVendor';
import { Hero, IHero } from '../../components/Hero';
import { Icon, IconProp } from '../../components/Icon';
import { IImage, Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { Section } from '../../components/Section';

export interface IEnterprise {
  customers?: {
    images: IImage[];
  };
  color: string;
  hero: IHero;
  gartnerCoolVendor: IGartnerCoolVendor;
  actionBar?: IActionBar;
}

export const Enterprise: React.FunctionComponent<IEnterprise> = ({
  color,
  hero,
  customers,
  gartnerCoolVendor,
  actionBar,
}) => {
  return (
    <Layout>
      <Hero
        bgColor={color}
        {...hero}
        aligned="left"
        wrapperClassName="border-b-8 border-blue-darkest"
        rightElem={
          <div className="flex-2 relative sm:hidden w-3/5">
            <Image
              useDiv
              src="/images/enterprise/hero.png"
              className="bg-contain bg-no-repeat absolute pin -mt-16 -mb-24 ml-20"
            />
          </div>
        }
      />

      <Section>
        <Container>
          <Features features={featureRowOne} className="sm:-mt-14" />
          <Features features={featureRowTwo} className="mt-32 sm:mt-6" />
        </Container>
      </Section>

      {customers && <CustomerSection images={customers.images} cardBg="white" />}

      <GartnerCoolVendor {...gartnerCoolVendor} />

      {actionBar && (
        <Section>
          <ActionBar {...actionBar} />
        </Section>
      )}
    </Layout>
  );
};

const featureRowOne: IFeature[] = [
  {
    name: 'Explorer',
    description: 'The single source of truth for all your API related assets.',
    icon: ['fad', 'chart-network'],
    iconStyle: {
      '--fa-primary-color': 'dodgerblue',
      '--fa-secondary-color': 'limegreen',
    },
  },
  {
    name: 'Design Libraries',
    description: 'Define standard representations of your primary domain objects for easy re-use.',
    icon: ['fad', 'layer-group'],
    iconStyle: {
      '--fa-primary-color': 'orange',
      '--fa-secondary-color': 'red',
    },
  },
  {
    name: 'API Style Guides',
    description: 'Style guides increase API quality and consistency.',
    icon: ['fad', 'pencil-ruler'],
    iconStyle: {
      '--fa-primary-color': 'skyblue',
      '--fa-secondary-color': 'steelblue',
    },
  },
  {
    name: 'Internal Docs',
    description: 'Technical docs for the entire company.',
    icon: ['fad', 'book'],
    iconStyle: {
      '--fa-primary-color': 'salmon',
      '--fa-secondary-color': 'darksalmon',
    },
  },
];

const featureRowTwo: IFeature[] = [
  {
    name: 'External Docs',
    description: 'Publish docs for your customers and external stakeholders.',
    icon: ['fad', 'book-open'],
    iconStyle: {
      '--fa-primary-color': 'indianred',
      '--fa-secondary-color': 'indianred',
    },
  },
  {
    name: 'Git Integrations',
    description: 'Seamlessly integrates with Github, Bitbucket, and Gitlab.',
    icon: ['fad', 'code-branch'],
    iconStyle: {
      '--fa-primary-color': 'dodgerblue',
      '--fa-secondary-color': 'limegreen',
    },
  },
  {
    name: 'SSO Integrations',
    description: 'Connect your identity provider.',
    icon: ['fad', 'shield'],
    iconStyle: {
      '--fa-primary-color': 'tomato',
      '--fa-secondary-color': 'tomato',
    },
  },
  {
    name: 'On-Premise',
    description: 'Runs where you want - hybrid cloud or in your data center.',
    icon: ['fad', 'server'],
    iconStyle: {
      '--fa-primary-color': 'slategray',
      '--fa-secondary-color': 'slategray',
    },
  },
];

interface IFeatures {
  features: IFeature[];
  className?: string;
}

interface IFeature {
  name: string;
  icon: IconProp;
  iconStyle?: any;
  description: string;
}

const Features = ({ features, className }: IFeatures) => {
  return (
    <div className={cn(className, 'flex justify-around flex-wrap')}>
      {features.map((feature, index) => {
        return <Feature {...feature} key={index} />;
      })}
    </div>
  );
};

const Feature = ({ name, description, icon, iconStyle }: IFeature) => {
  return (
    <div className="w-80 text-center px-5 sm:pt-14">
      <Icon icon={icon} size="3x" style={iconStyle} />
      <div className="font-bold text-xl mt-5">{name}</div>
      <div className="text-grey-dark font-medium mt-2 leading-loose">{description}</div>
    </div>
  );
};

export default withSiteData(withRouteData(Enterprise));
