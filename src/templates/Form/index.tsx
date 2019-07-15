import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Collage, ICollage } from '../../components/Collage';
import { Container } from '../../components/Container';
import { Hero } from '../../components/Hero';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { Layout } from '../../components/Layout';
import { IRelatedPage, RelatedPages } from '../../components/RelatedPages';
import { ITestimonials, Testimonials } from '../../components/Testimonials';

export interface IForm {
  title: string;
  subtitle: string;
  color: string;
  hubspot: IHubSpotForm;
  collage: ICollage;
  testimonials: ITestimonials;
  titleImage?: string;
  relatedPages?: IRelatedPage[];
  actionBar: IActionBar;
  leftContent?: {
    title: string;
    description: string;
  };
}

export const Form: React.FunctionComponent<IForm> = ({
  titleImage,
  title,
  subtitle,
  color,
  leftContent,
  hubspot,
  collage,
  testimonials,
  relatedPages,
  actionBar,
}) => {
  const hasLeftContent = leftContent && leftContent.description ? true : false;

  return (
    <Layout>
      <Hero
        titleImage={titleImage}
        title={title}
        subtitle={subtitle}
        bgColor={color}
        aligned={hasLeftContent || titleImage ? 'left' : 'center'}
        titleClassName={hasLeftContent ? '' : 'mb-40'}
      />

      <Container className="flex relative z-20 py-24 md:flex-wrap-reverse">
        {hasLeftContent && (
          <div className="w-2/3 md:w-full pr-24 md:pr-0 flex-1">
            {leftContent &&
              leftContent.title && <div className="text-3xl" dangerouslySetInnerHTML={{ __html: leftContent.title }} />}

            {leftContent &&
              leftContent.description && (
                <div
                  className={cn('markdown-body', leftContent.title ? 'mt-10' : '')}
                  dangerouslySetInnerHTML={{ __html: leftContent.description }}
                />
              )}
          </div>
        )}

        {hubspot && (
          <div className={hasLeftContent ? 'z-10 relative md:w-full' : 'flex-1 -mt-40'}>
            <HubSpotForm
              className="p-8 sticky"
              portalId={hubspot.portalId}
              formId={hubspot.formId}
              style={{ width: hasLeftContent ? 450 : 500, top: 100 }}
            />
          </div>
        )}
      </Container>

      <section />

      <Testimonials {...testimonials} />

      <Collage id="customers" {...collage} />

      {actionBar && <ActionBar className="my-24" {...actionBar} />}

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}
    </Layout>
  );
};

export default withRouteData(Form);
