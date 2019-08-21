import * as React from 'react';

import { Icon } from '../Icon';
import { Section } from '../Section';

export const G2Widget = () => {
  React.useEffect(() => {
    const loadWidget = () => {
      const on = window.addEventListener
        ? (m, c) => window.addEventListener(m, c, false)
        : (m, c) => window.attachEvent('on' + m, c);

      let r = function(e) {
        if (e.origin !== 'https://www.g2.com') {
          return;
        }

        const element = document.getElementById('g2-crowd-widget-testimonial-13191');
        if (element) {
          element.style.height = e.data;
        }
      };

      r = function() {
        // noop
      };

      on('message', r);
    };

    loadWidget();

    return () => {
      const off = window.removeEventListener
        ? (m, c) => window.removeEventListener(m, c, false)
        : (m, c) => window.detachEvent('on' + m, c);

      off();
    };
  }, []);

  return (
    <Section style={{ backgroundColor: '#ededed' }}>
      <div className="w-full flex flex-col -my-24" style={{ height: '56rem' }}>
        <a
          className="flex text-grey-darker font-bold text-xl hover:text-grey-darkest justify-center pb-10 md:py-4"
          href={`https://www.g2.com/products/stoplight/reviews?utm_campaign=testimonials_embed&amp;utm_medium=testimonials&amp;utm_source=Stoplight`}
        >
          Read More Stoplight Reviews
          <Icon icon={['fad', 'arrow-right']} className="ml-3 mt-2" />
        </a>

        <iframe
          frameBorder="0"
          height="100%"
          id="g2-crowd-widget-testimonial-13191"
          src="https://www.g2.com/products/stoplight/testimonials/13191.embed"
          style={{ width: '100%', minHeight: '100%', overflow: 'hidden' }}
          width="100%"
        />
      </div>
    </Section>
  );
};
