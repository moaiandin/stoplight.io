import cn from 'classnames';
import { DiscussionEmbed } from 'disqus-react';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from 'src/components/ActionBar';
import { Container } from 'src/components/Container';
import { Hero, IHero, IHeroBreadCrumb } from 'src/components/Hero';
import { IHeroAuthor } from 'src/components/Hero/HeroAuthor';
import { Image } from 'src/components/Image';
import { IInfo, Info } from 'src/components/Info';
import { IQuote, Quote } from 'src/components/Quote';
import { IRelatedPage, RelatedPages } from 'src/components/RelatedPages';
import { Section } from 'src/components/Section';
import { ITab } from 'src/components/Tabs';
import { convertMarkdownToHTML } from 'src/utils/markdown/index.js';
import { Layout } from '../../components/Layout';

export interface IPage {
  path: string;
  title: string;
  subtitle: string;
  className?: string;
  pageName?: string;
  breadCrumbs?: IHeroBreadCrumb[];
  body: string;
  bodyImage?: string;
  author?: IHeroAuthor;
  publishedDate?: string;
  color?: string;
  hero: Partial<IHero>;
  actionBar?: IActionBar;
  sidebar?: {
    info?: IInfo;
    quotes?: IQuote[];
  };
  relatedPages?: IRelatedPage[];
  disqus?: { enabled: boolean };
  tabs?: ITab[];
  includeToc?: boolean;
}

/**
 * SUBPAGE
 */

export const Subpage: React.FunctionComponent<IPage> = ({
  className,
  path,
  title,
  subtitle,
  pageName,
  breadCrumbs,
  body,
  bodyImage,
  author,
  publishedDate,
  color,
  hero,
  sidebar,
  actionBar,
  relatedPages,
  disqus,
  tabs,
  includeToc = true,
}) => {
  const heroProps: IHero = {
    ...hero,
    title,
    subtitle,
    pageName,
    bgColor: color,
    breadCrumbs,
  };

  if (author && author.name) {
    heroProps.author = { ...author, meta: publishedDate };
  }

  let url = path;
  let showDisqus = disqus && disqus.enabled;
  if (typeof window !== 'undefined') {
    url = window.location.origin + path;
    showDisqus = showDisqus && window.location.pathname !== '/admin';
  }

  const html = convertMarkdownToHTML(body, { includeToc: !sidebar && includeToc });

  return (
    <Layout>
      <Hero {...heroProps} tabs={tabs} />

      <Section noPadding>
        <Container className="mx-auto my-24">
          <div className="relative">
            {sidebar && (
              <div className="-mt-32 ml-12 mb-12 w-1/3 sm:mt-0 sm:ml-0 sm:mb-24 sm:w-full float-right sm:float-none">
                {sidebar.info ? <Info {...sidebar.info} /> : null}

                {sidebar.quotes && sidebar.quotes.length
                  ? sidebar.quotes.map((quote, index) => {
                      return <Quote key={index} {...quote} />;
                    })
                  : null}
              </div>
            )}

            {bodyImage && (
              <div
                className="text-center"
                style={{
                  marginTop: -120,
                }}
              >
                <Image className="rounded-lg shadow bodyImage" src={bodyImage} alt={bodyImage} />
              </div>
            )}

            <div className={cn('markdown-body', className)} dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </Container>
      </Section>

      {actionBar && <ActionBar className="my-24" {...actionBar} />}

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}

      {showDisqus && (
        <div className="container my-10">
          <DiscussionEmbed
            shortname="stoplight-io"
            config={{
              url,
              identifier: url,
              title,
            }}
          />
        </div>
      )}
    </Layout>
  );
};

export default withRouteData(Subpage);
