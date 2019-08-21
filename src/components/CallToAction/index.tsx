import * as React from 'react';

import { Button, IButton } from '../Button';
import { Link } from '../Link';
import { ISubmit, Submit } from '../Submit';
import { VideoPlayerModal } from '../VideoPlayerModal';

export interface ICallToAction extends Omit<IButton, 'href' | 'type' | 'download'> {
  type?: 'link' | 'video' | 'submit';
  submit?: ISubmit;
  href?: string;
}

export const CallToAction: React.FunctionComponent<ICallToAction> = ({ type, href = '/', submit, ...rest }) => {
  if (!rest.title) {
    return null;
  }

  const cta = <Button href={href} {...rest} />;

  let ctaComponent = cta;
  if (submit) {
    ctaComponent = <Submit {...submit} />;
  } else if (type === 'video') {
    ctaComponent = (
      <VideoPlayerModal href={href}>
        {({ onClick }) => <Button onClick={onClick} icon="play" {...rest} />}
      </VideoPlayerModal>
    );
  } else if (type === 'link') {
    ctaComponent = <Link to={href}>{rest.title}</Link>;
  }

  return ctaComponent;
};
