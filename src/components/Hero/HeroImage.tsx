import cn from 'classnames';
import * as React from 'react';

import { Container } from '../Container';
import { Icon } from '../Icon';
import { IImage, Image } from '../Image';
import { VideoPlayerModal } from '../VideoPlayerModal';

export interface IHeroImage extends IImage {
  className?: string;
  video?: string;
}

export const HeroImage: React.FunctionComponent<IHeroImage> = ({ className, video, src, alt }) => {
  if (!src) {
    return null;
  }
  return (
    <section>
      <Container className="relative text-center" style={{ maxHeight: 500 }}>
        {video && (
          <VideoPlayerModal href={video}>
            {({ onClick }) => (
              <div className="absolute pin flex items-center justify-center cursor-pointer" onClick={onClick}>
                <Icon icon="play-circle" size="5x" />
              </div>
            )}
          </VideoPlayerModal>
        )}
        <Image className={cn(className, 'rounded-lg')} src={src} alt={alt} size="lg" />
      </Container>
    </section>
  );
};
