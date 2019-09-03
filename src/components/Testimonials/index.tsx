import * as React from 'react';

import { Container } from '../Container';
import { Icon } from '../Icon';
import { Image } from '../Image';
import { Section } from '../Section';

export interface ITestimonial {
  image: string;
  quote: string;
  author: string;
  company: string;
  role: string;
}

export interface ITestimonials {
  title?: string;
  description?: string;
  testimonials: ITestimonial[];
}

export const Testimonial: React.FunctionComponent<ITestimonial> = ({ image, quote, author, company, role }) => {
  return (
    <div className="w-1/2 sm:w-full flex px-14 pb-20 sm:px-0 sm:px-10">
      <div className="max-w-lg w-full lg:flex shadow-md mx-auto items-stretch bg-white relative rounded-lg">
        {!image && (
          <Icon className="absolute text-grey h-10" style={{ top: -15, left: -15, fontSize: 30 }} icon="quote-left" />
        )}

        {!image && (
          <Icon
            className="absolute text-grey h-10"
            style={{ bottom: -15, right: -15, fontSize: 30 }}
            icon="quote-right"
          />
        )}

        {image && (
          <div className="flex flex-col justify-center sm:items-center sm:pt-8">
            <Image src={image} className="-ml-12 sm:ml-0 rounded-full bg-cover shadow h-32 w-32" size="sm" useDiv />
          </div>
        )}

        <div className="p-8 flex flex-col justify-center leading-normal">
          <p className="text-grey-darker leading-loose flex-1">{quote}</p>

          <p className="font-bold mt-4">
            {author}
            {company && `, ${company}`}
            {role && `, ${role}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FunctionComponent<ITestimonials> = ({ title, description, testimonials }) => {
  if (!testimonials || !testimonials.length) {
    return null;
  }

  return (
    <Section id="testimonials" noPadding className="pb-32">
      <Container
        title={title}
        description={description}
        chips={{
          className: 'justify-center mb-32',
          segments: [{ color: 'orange-light', length: 2 }, { color: 'orange-dark', length: 4 }, { color: 'orange' }],
        }}
      >
        <div className="flex flex-wrap -mx-14 sm:mx-0">
          {testimonials.map((testimonial, index) => {
            return <Testimonial key={index} {...testimonial} />;
          })}
        </div>
      </Container>
    </Section>
  );
};
