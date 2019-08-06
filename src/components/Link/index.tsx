import * as React from 'react';
import { Link as StaticLink } from 'react-router-dom';

export interface ILink {
  to?: string;
  className?: string;
  title?: string;
  disabled?: boolean;
  style?: object;
  onClick?: () => void;
}

export const Link: React.FunctionComponent<ILink> = ({ to, children, disabled, ...props }) => {
  let href = to;

  if (!to) {
    return <div {...props}>{children}</div>;
  } else if (disabled) {
    return <a {...props}>{children}</a>;
  } else if (typeof href === 'string') {
    href = href.trim(); // Make sure there aren't any trailing white spaces

    if (href.includes('/p/') || /^http/.test(href)) {
      return (
        <a {...props} href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    } else if (href.startsWith('#')) {
      return (
        <a {...props} href={href}>
          {children}
        </a>
      );
    }
  }

  // Replace multiple trailing slashes with a single slash
  href = `${to}/`.replace(/\/{1,}$/, '/');

  return (
    <StaticLink {...props} to={href}>
      {children}
    </StaticLink>
  );
};
