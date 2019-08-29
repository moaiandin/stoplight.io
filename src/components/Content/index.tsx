import cn from 'classnames';
import * as React from 'react';
import { IInfo } from 'src/components/Info';
import { IQuote } from 'src/components/Quote';
import { convertMarkdownToHTML } from 'src/utils/markdown/index.js';
import { useBanner } from '../../hooks/useBanner';
import { CallToAction } from '../CallToAction';

export interface IContent {
  body: string;
  sidebar?: {
    info?: IInfo;
    quotes?: IQuote[];
  };
  includeToc?: boolean;
  className?: string;
}

export const Content: React.FunctionComponent<IContent> = ({ sidebar, includeToc, className, body }) => {
  const [isBannerShowing] = useBanner();
  const html = convertMarkdownToHTML(body, { includeToc: !sidebar && includeToc });

  return (
    <>
      {!sidebar && (
        <div
          className="sticky flex flex-col items-end -mr-20 -mb-40 z-10 md:-mr-6"
          style={{ top: isBannerShowing ? 140 : 80 }}
        >
          <div className="bg-grey-light p-4 rounded-lg shadow-md sm:hidden">
            <p className="text-sm font-bold ml-6 sm:hidden">Design APIs 10x Faster</p>
            <CallToAction
              className="z-5 mt-4 sm:hidden bg-grey-lightest"
              href="https://stoplight.io/studio/?utm_campaign=studio_blog"
              title="Download Studio"
              color="green"
              icon="arrow-right"
              outlined
            />
            <p className="text-sm italic ml-8 mt-4 sm:hidden">Free. Runs everywhere.</p>
          </div>
        </div>
      )}

      <div className={cn('markdown-body pt-10', { 'has-banner': isBannerShowing })}>
        <div
          className={cn(className, { 'm-auto': !sidebar && !includeToc })}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  );
};
