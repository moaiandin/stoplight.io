import cn from 'classnames';
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'src/components/Container';
import { IImage, Image } from 'src/components/Image';
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
                <FontAwesomeIcon icon="play-circle" size={'5x'} />
              </div>
            )}
          </VideoPlayerModal>
        )}
        <Image className={cn(className, 'rounded-lg')} src={src} alt={alt} size="lg" />
      </Container>
    </section>
  );
};
