import cn from 'classnames';
import * as React from 'react';

import { CallToAction, ICallToAction } from 'src/components/CallToAction';
import { headerHeightClass } from 'src/components/Header';
import { Image } from 'src/components/Image';
import { Link } from 'src/components/Link';
import { ITab, Tabs } from 'src/components/Tabs';
import { HeroAuthor, IHeroAuthor } from './HeroAuthor';
import { HeroImage, IHeroImage } from './HeroImage';

let Particles;
if (typeof window !== 'undefined') {
  Particles = require('react-particles-js').default;
}

export const indexMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
};

const skewMap = {
  '3deg': {
    containerClass: 'pb-48',
    bottom: 45,
  },
  '7deg': {
    containerClass: 'pb-24',
    bottom: 60,
  },
  '-7deg': {
    containerClass: 'pb-64',
    bottom: 105,
  },
  '-10deg': {
    containerClass: 'pb-24',
    bottom: 150,
  },
  '-15deg': {
    containerClass: 'pb-48',
    bottom: 225,
  },
};

export interface IHeroBreadCrumb {
  title: string;
  path?: string;
}

export interface IHero {
  title: string;
  subtitle: string;
  pageName?: string;
  breadCrumbs?: IHeroBreadCrumb[];
  author?: IHeroAuthor;
  image?: IHeroImage;
  bgColor?: string;
  contentBgImage?: string;
  contentBgOverlay?: string;
  greyBg?: boolean;
  aligned?: 'center' | 'right' | 'left';
  ctas?: ICallToAction[];
  particles?: boolean;
  skew?: 'rounded' | '-15deg' | '-10deg' | '-7deg' | '-3deg' | '3deg' | '7deg' | '10deg' | '15deg';
  containerClassName?: string;
  wrapperClassName?: string;
  tabs?: ITab[];
  titleImage?: string;
  titleClassName?: string;
  rightElem?: React.ReactNode;
  bottomElem?: React.ReactNode;
}

export const Hero: React.FunctionComponent<IHero> = ({
  pageName,
  breadCrumbs,
  aligned = 'center',
  title,
  subtitle,
  author,
  ctas,
  bgColor = 'black',
  contentBgImage,
  greyBg,
  particles,
  image,
  skew,
  containerClassName,
  wrapperClassName,
  rightElem,
  bottomElem,
  tabs = [],
  titleImage,
  titleClassName,
}) => {
  // Filter out any empty button objects
  const heroTabs = tabs.filter(tab => {
    return tab.href;
  });

  // Force left alignment with hero tabs
  if (heroTabs.length) {
    aligned = 'left';
  }

  const hasBottomContent = bottomElem || (heroTabs && heroTabs.length) || image;
  const skewOpts = skew && skewMap[skew];

  return (
    <React.Fragment>
      <div
        key="main"
        className={cn(wrapperClassName, 'relative', {
          [skewOpts ? skewOpts.containerClass : undefined]: skewOpts,
          'pb-32 sm:pb-10': !hasBottomContent && !skew && !contentBgImage,
          'pb-24': contentBgImage,
        })}
      >
        <div className={cn(headerHeightClass, 'w-100', { [`bg-${bgColor}`]: bgColor })} />

        <div
          className={cn(
            containerClassName,
            `container text-white flex flex-col pt-32 sm:pt-14 relative z-5 text-${aligned} relative`,
          )}
          style={contentBgImage ? { textShadow: `rgba(0, 0, 0, 0.6) 1px 1px 0px` } : undefined}
        >
          <div className="flex">
            <div
              className={cn('flex-1', titleClassName, {
                'mx-auto': !aligned || aligned === 'center',
                'ml-auto w-2/3 md:w-full': aligned === 'right',
                'mr-auto w-2/3 md:w-full': aligned === 'left',
              })}
            >
              {breadCrumbs && breadCrumbs.length ? (
                <div className="text-white opacity-85 font-semibold mb-4 flex items-center">
                  {breadCrumbs.map((breadCrumb, index) => (
                    <React.Fragment key={index}>
                      <Link className="text-white" to={breadCrumb.path}>
                        {breadCrumb.title}
                      </Link>
                      {index < breadCrumbs.length - 1 ? <span className="mx-2">></span> : null}
                    </React.Fragment>
                  ))}
                </div>
              ) : null}

              {pageName && <div className="uppercase text-white opacity-85 font-semibold mb-4">{pageName}</div>}

              <div className="flex">
                <div className="flex-1">
                  <h1 className="text-5xl md:text-4xl leading-tight">{title}</h1>

                  {subtitle && (
                    <h2
                      className={cn('font-default opacity-75 max-w-xl mt-4 md:mt-4', {
                        'mx-auto': !aligned || aligned === 'center',
                        'ml-auto': aligned === 'right',
                        'mr-auto': aligned === 'left',
                      })}
                    >
                      {subtitle}
                    </h2>
                  )}

                  {ctas && (
                    <div
                      className={cn('flex sm:flex-col sm:w-full mt-14 sm:mt-8 whitespace-no-wrap', {
                        '-mx-40 sm:mx-0': ctas && ctas.length > 2,
                        'mx-auto justify-center': aligned === 'center',
                        'ml-auto': aligned === 'right',
                        'mr-auto': aligned === 'left',
                      })}
                    >
                      {ctas.map((action, i) => (
                        <CallToAction key={i} className="m-3 sm:w-full sm:mx-auto" {...action} />
                      ))}
                    </div>
                  )}
                </div>

                {rightElem}
              </div>

              {author && (
                <div>
                  <HeroAuthor className="mt-6 text-white opacity-85" {...author} />
                </div>
              )}
            </div>

            {titleImage && (
              <div>
                <Image style={{ height: 130 }} src={titleImage} />
              </div>
            )}
          </div>
        </div>

        {bottomElem}

        {image && <HeroImage {...image} className="relative z-5 mt-16" />}

        {heroTabs.length > 0 ? <Tabs tabs={heroTabs} className="pt-24" /> : null}

        {contentBgImage ? (
          <div
            className="absolute pin z-1 bg-cover bg-no-repeat bg-center border-b-4 border-darken-300"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contentBgImage})`,
            }}
          />
        ) : (
          <div
            className={cn('absolute pin overflow-hidden', {
              'bg-grey-lightest': greyBg,
            })}
          >
            <Image
              src={particles ? '' : '/images/patterns/diagonal-stripes-sm.png'}
              className={cn('absolute z-0 overflow-hidden', {
                [`bg-${bgColor}`]: bgColor,
                'shadow-inner-intense': skew === 'rounded',
                'border-b-4 border-lighten-300': !hasBottomContent && !skew,
              })}
              style={{
                width: skew === 'rounded' ? '200%' : 'auto',
                top: -300,
                bottom: skew ? (skewOpts && skewOpts.bottom) || 50 : 0,
                left: skew === 'rounded' ? '-50%' : 0,
                right: skew === 'rounded' ? '-50%' : 0,
                borderRadius: skew === 'rounded' ? '50%' : '0',
                transform: skew && skew !== 'rounded' ? `skew(0, ${skew})` : undefined,
                background: bgColor ? undefined : 'radial-gradient(circle, #0f0c2f 0%, #080515 100%)',
              }}
              useDiv
            />
          </div>
        )}

        {particles && (
          <div className="absolute z-1 sm:hidden" style={{ left: 0, top: -25, right: 0, bottom: -100 }}>
            {Particles && (
              <Particles
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                params={{
                  fps_limit: 15,
                  retina_detect: true, // possible performance issues when true
                  particles: {
                    number: {
                      value: 160,
                      density: {
                        enable: false,
                      },
                    },
                    size: {
                      value: 3,
                      random: true,
                      anim: {
                        speed: 4,
                        size_min: 0.3,
                      },
                    },
                    line_linked: {
                      enable: false,
                    },
                    move: {
                      random: true,
                      speed: 1.2,
                      direction: 'top',
                      out_mode: 'out',
                    },
                  },
                }}
              />
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
