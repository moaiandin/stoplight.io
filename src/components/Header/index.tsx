import cn from 'classnames';
import * as React from 'react';
import Headroom from 'react-headroom';
import { Head, withRouteData, withSiteData } from 'react-static';

import { useBanner } from '../../hooks/useBanner';
import { Icon, IconProp } from '../Icon';
import { Link } from '../Link';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export const headerHeightClass = 'h-20';

export interface IHeaderLink {
  title: string;
  icon: IconProp;
  titleColor: string;
  href: string;
}

export interface IHeaderItem {
  title: string;
  altTitle?: string;
  href?: string;
  altBg?: string;
  isButton?: boolean;
  hideMobile?: boolean;
  className?: string;
  links?: IHeaderLink[];
  width?: number;
  icon?: IconProp;
  content?: () => React.ReactElement;
}

export interface IBanner {
  markdown: string;
  starts: string;
  ends: string;
  hideOnPath: string[];
}

export interface IHeader {
  header: {
    items: IHeaderItem[];
  };
  meta: any;
  color?: string;
  banners: IBanner[];
  path: string;
}

export const Header: React.FunctionComponent<IHeader> = props => {
  const [unpinned, setUnpinned] = React.useState(false);

  const onUnpin = React.useCallback(() => setUnpinned(true), [setUnpinned]);
  const onUnfix = React.useCallback(() => setUnpinned(false), [setUnpinned]);

  const { header, meta, color, banners } = props;
  const headerItems = (header && header.items) || [];

  let banner;
  if (banners && banners.length) {
    const time = new Date().getTime();
    banner = banners.find(b => {
      if (!b || !b.markdown || (b.hideOnPath || []).includes(props.path)) return;

      return new Date(Number(b.starts)).getTime() <= time && new Date(Number(b.ends)).getTime() >= time;
    });
  }

  return (
    <React.Fragment>
      <Head key="meta">
        <title>{meta && meta.title}</title>
      </Head>

      <div className="absolute pin">
        <header
          key="header"
          className={cn('z-50 sticky pin-t pin-l pin-r', {
            [`shadow-md bg-${color || 'black'}`]: unpinned,
          })}
        >
          <div className="relative">
            <Banner banner={banner} />

            <nav className={cn(headerHeightClass, 'container relative flex items-center')}>
              <Link to="/" className="text-white hover:opacity-75 hover:text-white text-lg font-bold mr-8">
                Stoplight
              </Link>

              <Desktop items={headerItems} unpinned={unpinned} />

              <Mobile />
            </nav>
          </div>

          <Headroom
            downTolerance={0}
            pinStart={banner ? 42 : 0}
            disableInlineStyles={true}
            onUnpin={onUnpin}
            onUnfix={onUnfix}
            children={[]}
          />
        </header>
      </div>
    </React.Fragment>
  );
};

export default withSiteData(withRouteData(Header));

export const Banner = ({ banner }) => {
  const [showBanner, setShowBanner] = useBanner();
  const onClickBanner = React.useCallback(() => setShowBanner(false), [setShowBanner]);

  if (!banner || !showBanner) return null;

  return (
    <div className="relative z-50 border-b border-lighten-200 text-white Banner bg-lighten-50 sm:hidden">
      <div className="container h-12 flex flex-no-wrap items-center">
        <Icon icon={['fad', 'rocket']} className="mr-3" />

        <div className="flex-1" dangerouslySetInnerHTML={{ __html: banner && banner.markdown }} />

        <div
          className="cursor-pointer flex hover:bg-lighten-100 items-center justify-center justify-end p-2 rounded text-lighten-400 hover:text-white"
          onClick={onClickBanner}
        >
          <Icon icon="times" />
        </div>
      </div>
    </div>
  );
};
