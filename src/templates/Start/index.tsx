import { Dictionary } from '@stoplight/types';
import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { Button, IButton } from '../../components/Button';
import { Chips } from '../../components/Chip';
import { Container } from '../../components/Container';
import { headerHeightClass } from '../../components/Header';
import { Icon, IconProp } from '../../components/Icon';
import { Layout } from '../../components/Layout';
import { Popup } from '../../components/Popup';

export const Start: React.FunctionComponent = () => {
  const [userType, updateUserType] = React.useState();
  const [useCase, updateUseCase] = React.useState();

  const result = results[`${userType ? userType.id : 'none'}+${useCase ? useCase.id : 'none'}`];

  let resultElem;
  if (result) {
    resultElem = (
      <div className="mt-24">
        <Chips className="justify-center" segments={[{ color: 'green', length: 3 }, { color: 'green-lighter' }]} />

        <div className="mt-24 text-grey-light text-xl max-w-xl leading-loose mx-auto">{result.message}</div>

        <div className="mt-12">
          {result.buttons.map((b, k) => (
            <Button {...b} key={k} large className="mr-5 sm:mt-4" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <Layout footer={{ noBorder: true }}>
      <div className="bg-black">
        <div className={cn(headerHeightClass, 'w-100')} />

        <Container className="pt-48 pb-96 sm:pt-24 sm:pb-64 text-white text-center">
          <h1 className="text-5xl">Get Started with Stoplight</h1>

          <div className="text-3xl sm:text-2xl mt-20">
            <div className="inline sm:block">
              {'I am a '}
              <StartOptionDropdown
                selected={userType}
                items={userTypeItems}
                onClick={updateUserType}
                triggerClassName="anim-wiggle anim-delay-1s"
              />
            </div>

            <div className="inline sm:hidden">{!userType && ' ...'}</div>

            <div className="inline sm:block sm:mt-6">
              {userType && ` interested in `}
              {userType ? (
                <StartOptionDropdown selected={useCase} items={useCaseItems} onClick={updateUseCase} />
              ) : null}
            </div>
          </div>

          {resultElem}
        </Container>
      </div>
    </Layout>
  );
};

export default withSiteData(withRouteData(Start));

interface IStartOptionDropdown {
  items: IDropdownItem[];
  onClick: (choice: IDropdownItem) => void;
  selected?: IDropdownItem;
  triggerClassName?: string;
}

const StartOptionDropdown = ({ selected, items, onClick, triggerClassName }: IStartOptionDropdown) => {
  return (
    <Popup
      posX="center"
      posY="bottom"
      width={250}
      show={typeof selected === 'undefined' ? true : undefined}
      renderTrigger={attributes => (
        <span
          className={cn(
            triggerClassName,
            'bg-blue text-white shadow-md-intense rounded-lg px-4 mx-3 inline-flex items-center relative cursor-pointer',
          )}
          {...attributes}
        >
          <div>{selected ? selected.title : 'choose'}</div>
          <Icon icon={['far', 'angle-down']} className="fa-fw -mr-1 ml-2 mt-1" />
        </span>
      )}
      renderContent={() => (
        <div className="bg-grey-lighter rounded-lg relative">
          <div className="StartPopover__caret text-grey-lighter">
            <Icon icon={['fad', 'caret-up']} />
          </div>

          {items && (
            <div className="p-3">
              {items.map(v => (
                <DropdownItem {...v} onClick={onClick} />
              ))}
            </div>
          )}
        </div>
      )}
    />
  );
};

interface IDropdownItem {
  id: string;
  icon: IconProp;
  color?: string;
  title: string;
}

interface IDropdownItemProps extends IDropdownItem {
  onClick: (choice: IDropdownItem) => void;
}

const DropdownItem = (item: IDropdownItemProps, index) => {
  return (
    <div
      key={index}
      onClick={() => {
        item.onClick(item);
      }}
      className={cn(
        'flex items-center pr-6 pl-3 py-2 rounded-lg text-black hover:bg-white hover:shadow cursor-pointer',
        {
          'pl-3': !item.icon,
        },
      )}
    >
      {item.icon && (
        <Icon className={cn('fa-fw fa-fw mr-3', { [`text-${item.color}`]: item.color })} icon={item.icon} />
      )}

      {item.title}
    </div>
  );
};

const userTypeItems: IStartOptionDropdown['items'] = [
  { id: 'individual', title: 'Individual', icon: ['fad', 'user'], color: 'purple' },
  { id: 'business', title: 'Business', icon: ['fad', 'building'], color: 'blue' },
];

const useCaseItems: IStartOptionDropdown['items'] = [
  { id: 'design', title: 'API Design', icon: ['fad', 'paint-brush'], color: 'green' },
  { id: 'docs', title: 'API Docs', icon: ['fad', 'book-open'], color: 'blue' },
  { id: 'mocking', title: 'API Mocking', icon: ['fad', 'database'], color: 'orange' },
];

interface IResult {
  message: string;
  buttons: IButton[];
}

const results: Dictionary<IResult> = {
  'individual+design': {
    message: "Stoplight Studio is our next gen API Designer. Click below to learn more, it's free!",
    buttons: [
      {
        title: 'Get Studio',
        color: 'purple',
        href: '/studio',
        icon: ['fad', 'paint-brush'],
        rightIcon: ['fad', 'arrow-right'],
      },
    ],
  },
  'individual+docs': {
    message:
      "The new Stoplight Docs product is perfect for open source and other small projects. It's free, integrates with git, and is easy to get started with.",
    buttons: [
      {
        title: 'Stoplight Docs',
        color: 'purple',
        href: '/docs',
        icon: ['fad', 'book-open'],
        rightIcon: ['fad', 'arrow-right'],
      },
    ],
  },
  'individual+mocking': {
    message:
      'Prism is our free open source API mocking tool. You can use it directly, or take advantage of the Prism integration in Stoplight Studio Desktop.',
    buttons: [
      {
        title: 'Learn About Prism',
        color: 'purple',
        href: '/prism',
        icon: ['fad', 'database'],
        rightIcon: ['fad', 'arrow-right'],
      },
      {
        title: 'Get Studio Desktop',
        color: 'green',
        href: '/studio',
        icon: ['fad', 'paint-brush'],
        rightIcon: ['fad', 'arrow-right'],
      },
    ],
  },
  'business+design': {
    message:
      'The Stoplight Enterprise Platform is perfect for managing API design at scale. You can also try out Stoplight Studio, our next gen API Designer.',
    buttons: [
      {
        title: 'Enterprise Platform',
        color: 'purple',
        href: '/enterprise',
        icon: ['fad', 'chart-network'],
        rightIcon: ['fad', 'arrow-right'],
      },
      {
        title: 'Get Studio',
        color: 'green',
        href: '/studio',
        icon: ['fad', 'paint-brush'],
        rightIcon: ['fad', 'arrow-right'],
      },
    ],
  },
  'business+docs': {
    message:
      'If you need beautiful, custom branded API documentation to provide to customers, look no further than Stoplight Hubs. For large companies with many internal or external APIs, we recommend the Stoplight Enterprise Platform.',
    buttons: [
      {
        title: 'Stoplight Hubs',
        color: 'purple',
        href: '/hubs',
        icon: ['fad', 'book-open'],
        rightIcon: ['fad', 'arrow-right'],
      },
      {
        title: 'Enterprise Platform',
        color: 'green',
        href: '/enterprise',
        icon: ['fad', 'chart-network'],
        rightIcon: ['fad', 'arrow-right'],
      },
    ],
  },
  'business+mocking': {
    message:
      'Prism is our free open source API mocking tool. You can use it directly, or take advantage of the Prism integration in Stoplight Studio Desktop. For large companies with many internal or external APIs, we recommend the Stoplight Enterprise Platform.',
    buttons: [
      {
        title: 'Learn About Prism',
        color: 'purple',
        href: '/prism',
        icon: ['fad', 'database'],
        rightIcon: ['fad', 'arrow-right'],
      },
      {
        title: 'Get Studio Desktop',
        color: 'green',
        href: '/studio',
        icon: ['fad', 'paint-brush'],
        rightIcon: ['fad', 'arrow-right'],
      },
      {
        title: 'Enterprise Platform',
        color: 'orange',
        href: '/enterprise',
        icon: ['fad', 'chart-network'],
        rightIcon: ['fad', 'arrow-right'],
      },
    ],
  },
};
