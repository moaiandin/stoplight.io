import cn from 'classnames';
import * as React from 'react';

import { Chips } from '../Chip';
import { Container, IContainer } from '../Container';
import { Icon, IconProp } from '../Icon';
import { IImage, Image } from '../Image';
import { Link } from '../Link';
import { ISection, Section } from '../Section';

export interface ICustomerSection extends ISection {
  images: IImage[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
  cardBg?: string;
}

export const CustomerSection: React.FunctionComponent<ICustomerSection> = ({
  images,
  title,
  cta,
  cardBg,
  ...sectionProps
}) => {
  if (!images || !images.length) {
    return null;
  }

  return (
    <Section {...sectionProps}>
      <Container
        chips={{
          className: 'justify-center mb-10',
          segments: [{ color: 'indigo', length: 2 }, { color: 'indigo-lighter' }],
        }}
      >
        <div className="uppercase text-grey-dark font-semibold text-center text-lg">
          Stoplight powers some of the worlds leading API first companies
        </div>

        <div className="flex justify-between flex-wrap items-center sm:justify-center mt-14">
          <CaseStudyCard
            href="/case-studies/arkea"
            company="Arkea"
            image="/images/logo_arkea_transparent.png"
            summary="Arkéa has been involved in open banking for several years by providing white label banking services and saw PSD2 as an opportunity to extend their open banking features."
            tag="Finance"
            color="orange"
            bg={cardBg}
          />

          <CaseStudyCard
            href="/case-studies/namely"
            company="Namely"
            image="/images/logo_namely_transparent.png"
            summary="Namely’s chief objective was to adopt API Design First principles. As they applied their new principle, they realized the importance of reliable, up to date, documentation."
            tag="HR"
            color="indigo"
            bg={cardBg}
          />

          <CaseStudyCard
            href="/case-studies/appointmentplus"
            company="AppointmentPlus"
            image="/images/logo_appointmentplus_transparent.png"
            summary="AppointmentPlus was managing multiple APIs built by different teams, at different times, with different strategies and intents."
            tag="Tech"
            color="green"
            bg={cardBg}
          />
        </div>

        <div className="flex justify-between flex-wrap items-center mt-10 px-6">
          {images.map((image, key) => (
            <div key={key} className="sm:w-1/2 sm:p-6 py-8 text-center">
              <Image className="h-8" src={image.src} title={`${image.alt} Logo`} alt={image.alt} size="sm" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

interface ICaseStudyCard {
  href: string;
  company: string;
  image: string;
  tag: string;
  summary: string;
  color: string;
  bg?: string;
  icon?: IconProp;
}

const CaseStudyCard = ({ company, image, color, summary, href, tag, icon, bg = 'white' }: ICaseStudyCard) => {
  return (
    <Link
      className={cn(`bg-${bg}`, 'w-96 h-80 flex flex-col rounded-lg p-8 pb-6 sm:mb-8 shadow-md hover-scale')}
      to={href}
    >
      <div>
        <Image className="h-10 text-grey-darkest" src={image} title={`${company} Logo`} alt={company} size="sm" />
      </div>

      <div className="leading-loose text-grey-darker mt-4 flex-1">{summary}</div>

      <div className="flex items-center mt-6 border-t pt-6">
        <div className="flex items-center flex-1">
          <div className="mr-3 font-semibold">Read</div>
          <Icon icon={['fad', 'arrow-right']} />
        </div>

        <div className="flex">
          <div
            className={`flex items-center text-sm rounded-full border border-${color}-lighter bg-${color}-lightest text-${color} uppercase font-semibold px-4 py-1`}
          >
            {icon && <Icon icon={icon} className="mr-3" />} <div>{tag}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
