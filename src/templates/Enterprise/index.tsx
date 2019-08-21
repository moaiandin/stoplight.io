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
import { Link } from '../../components/Link';
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
      <Hero bgColor={color} {...hero} aligned="center" />

      <Section>
        <Container>
          <Features features={featureRowOne} className="sm:-mt-14" />
          <Features features={featureRowTwo} className="mt-32 sm:mt-6" />
        </Container>
      </Section>

      {customers && <CustomerSection noPadding images={customers.images} cardBg="white" />}

      <GartnerCoolVendor {...gartnerCoolVendor} />

      <Section id="pricing">
        <Container title="Enterprise Packages">
          <div className="flex justify-around flex-wrap mt-12">
            <PricingCard
              icon={['fad', 'user-check']}
              title="Essential"
              buttonText="Download for Free"
              href="/docs"
              featuresTitle=""
              features={['OpenAPI v2 & v3', 'HTTP Request Maker', 'Unlimited Published Pages']}
            />

            <PricingCard
              isDark
              icon={['fad', 'user-friends']}
              title="Standard"
              href="/enterprise-contact"
              buttonText="$149 / Month"
              featuresTitle="All Essential features plus:"
              features={[
                'Themeing',
                'Build History & Instant Rollbacks',
                'Custom Domains',
                'Username/Password Login Page',
              ]}
            />

            <PricingCard
              isDark
              icon={['fad', 'users']}
              title="Pro"
              href="/enterprise-contact"
              buttonText="Contact Us"
              featuresTitle="All Standard features plus:"
              features={[
                'Custom CSS & JavaScript',
                'Download static HTML/CSS',
                'SAML Single Sign-On',
                'OAuth Token Manager',
                'Custom Invoicing',
              ]}
            />
          </div>
        </Container>
      </Section>

      {actionBar && (
        <Section>
          <ActionBar {...actionBar} />
        </Section>
      )}
    </Layout>
  );
};

export default withSiteData(withRouteData(Enterprise));

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

interface IPricingCard {
  isDark?: boolean;
  icon: IconProp;
  title: string;
  featuresTitle: string;
  features: string[];
  href: string;
  buttonText: string;
}

const PricingCard = ({ isDark, icon, title, featuresTitle, features, href, buttonText }: IPricingCard) => {
  return (
    <Link
      to={href}
      className={cn(
        'w-96 h-full flex flex-col rounded-lg p-8 pb-6 shadow-md hover-scale font-medium font-lg mr-10 mb-10',
        isDark ? 'bg-blue-darker text-white' : 'bg-white text-blue-darker',
      )}
    >
      <div className="w-full h-full flex flex-col">
        <div className={cn(`border-b flex flex-col items-center`, isDark ? 'border-lighten-200' : 'border-grey-light')}>
          <div>
            <Icon icon={icon} size="3x" />
          </div>

          <div className="text-center text-xl my-3 font-medium">{title}</div>

          {/* {tag && (
            <div className="flex justify-center mb-8">
              <div
                className={`flex items-center text-sm rounded-full border border-${tagColor}-lighter bg-${tagColor}-lightest text-${tagColor} uppercase font-semibold px-4 py-1`}
              >
                <div>{tag}</div>
              </div>
            </div>
          )} */}
        </div>

        {featuresTitle && <div className="mt-8 font-semibold">{featuresTitle}</div>}

        {features.map((feature, index) => (
          <div key={index} className={cn('flex items-center mt-6')}>
            <div>
              <Icon className="text-green" icon={['fad', 'check']} size="lg" />
            </div>

            <div className="mx-3 flex-1">{feature}</div>
          </div>
        ))}

        <div
          className={cn(
            'p-2 rounded-lg text-center mt-8 text-lg font-semibold',
            isDark ? 'bg-white text-blue-darker' : 'bg-blue-darker text-white',
          )}
        >
          {buttonText}
        </div>
      </div>
    </Link>
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
