import * as React from 'react';
import Modal from 'react-responsive-modal';
import { VideoPlayer } from '../VideoPlayer';

export interface IVideoPlayerModal {
  href: string;
  className?: string;
  children: (props: IVideoModalChildrenProps) => void;
}

export interface IVideoModalChildrenProps {
  onClick(e: any): void;
}

export const VideoPlayerModal: React.FunctionComponent<IVideoPlayerModal> = ({ href, className, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onOpenModal = React.useCallback(() => setIsOpen(true), [setIsOpen]);
  const onCloseModal = React.useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <div className={className}>
      {children({ onClick: onOpenModal })}
      <Modal
        open={isOpen}
        onClose={onCloseModal}
        center
        styles={{
          modal: {
            padding: '30px',
            background: 'black',
            maxWidth: '1000px',
            width: '100%',
          },
          overlay: {
            background: 'rgba(0, 0, 0, 0.5)',
          },
          closeButton: {
            background: '#bb27dd',
          },
        }}
      >
        <VideoPlayer href={href} playing={isOpen} />
      </Modal>
    </div>
  );
};
