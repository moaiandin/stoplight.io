import * as React from 'react';
import Modal from 'react-responsive-modal';
import { VideoPlayer } from '../VideoPlayer';

export interface IVideoPlayerModal {
  href: string;
  cta: object;
}

export const VideoPlayerModal: React.FunctionComponent<IVideoPlayerModal> = ({ href, cta }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onOpenModal = React.useCallback(() => setIsOpen(true), [setIsOpen]);
  const onCloseModal = React.useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <div>
      <button onClick={onOpenModal}>{cta}</button>
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
        <VideoPlayer href={href} />
      </Modal>
    </div>
  );
};
