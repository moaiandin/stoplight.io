import * as React from 'react';

import { CallToAction, ICallToAction } from 'src/components/CallToAction';
import { Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

export interface IImageCallout extends ISection {
  title: string;
  cta: ICallToAction;
  description: string;
  image?: string;
}

export const ImageCallout: React.FunctionComponent<IImageCallout> = ({ title, cta, description, image }) => {
  if (!image && !title && !description) {
    return null;
  }

  return (
    <Section id={title} className={'flex sm:pr-0 sm:text-center pt-48 pb-40 sm:pt-40 sm:pb-24'} noPadding>
      <div className="flex-1 w-1/2 sm:w-100 text-center items-end sm:items-center pr-20 sm:px-3">
        <div className="max-w-sm flex flex-col ml-auto sm:m-auto">
          <h2 className="text-secondary mb-10 text-3xl text-center">{title}</h2>

          <div
            className="mb-12 pb-12 leading-loose text-lg border-b border-darken-50 sm:border-none sm:px-2"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {cta && <CallToAction {...cta} className="sm:mx-auto" />}
        </div>
      </div>

      {image && (
        <div className="flex-1 w-1/2 sm:hidden relative">
          <Image
            src={image}
            className="absolute pin bg-left-top bg-cover bg-no-repeat"
            style={{ top: -60, bottom: -200 }}
            size="lg"
            useDiv
          />
        </div>
      )}
    </Section>
  );
};
