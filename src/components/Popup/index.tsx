import * as React from 'react';

import { Portal } from '../Portal';

export type PopupTriggerRenderer = (
  attributes: {
    key: string;
    onMouseEnter: (e: any) => void;
    onMouseLeave: (e: any) => void;
    ref: (el: any) => void;
  },
  props: {
    isVisible: boolean;
    isOver: boolean;
    showPopup: () => void;
    hidePopup: () => void;
  },
) => any;

export type PopupContentRenderer = (
  attributes: object,
  props: {
    isVisible: boolean;
    isOver: boolean;
    showPopup: () => void;
    hidePopup: () => void;
  },
) => any;

export interface IPopupPosition {
  width?: number; // force a width
  padding?: number; // transparent space around the popup
  offset?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  posX?: 'left' | 'center' | 'right';
  posY?: 'top' | 'center' | 'bottom';
  show?: boolean; // controlled or debugging
}

export interface IPopup extends IPopupPosition {
  hideDelay?: number; // how long popup will show for after user mouses out
  renderTrigger: PopupTriggerRenderer;
  renderContent: PopupContentRenderer;
}

export interface IPopupStyle {
  position?: string;
  zIndex?: number;
  minWidth?: number;
  width?: number;
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
  visibility?: string;
  overflow?: string;
}

export interface IPopupState {
  style?: any;
}

// TODO: repaint on screen size change
// TODO: allow specifying target container (so that can optionally scroll with content)
// TODO: add a tip icon option
export class Popup extends React.PureComponent<IPopup, IPopupState> {
  private _isOverTrigger: boolean = false;
  private _isOverContent: boolean = false;
  private _willHide: any;
  private _trigger?: HTMLDivElement;
  private _content?: HTMLDivElement;

  constructor(props: any) {
    super(props);

    this.state = {};
  }

  public render() {
    const { renderTrigger, renderContent } = this.props;

    const funcs = {
      isVisible: this.isVisible,
      showPopup: this.showPopup,
      hidePopup: this.hidePopup,
    };

    const elems: any = [];

    elems.push(
      renderTrigger(
        {
          key: 't',
          onMouseEnter: () => this.handleMouseEnter('_isOverTrigger'),
          onMouseLeave: e => this.handleMouseLeave(e, '_isOverTrigger', '_isOverContent'),
          ref: el => (this._trigger = el),
        },
        {
          ...funcs,
          isOver: this._isOverTrigger,
        },
      ),
    );

    let style: object = {
      position: 'fixed',
      zIndex: 999,
      padding: this._padding,
      width: this._width,
    };

    if (this.state.style) {
      style = {
        ...style,
        ...this.state.style,
      };
    } else {
      style = {
        ...style,
        visibility: this.isVisible ? 'visible' : 'hidden',
      };
    }

    if (this.isVisible) {
      elems.push(
        <Portal key="p">
          <div
            onMouseEnter={() => this.handleMouseEnter('_isOverContent')}
            onMouseLeave={e => this.handleMouseLeave(e, '_isOverContent', '_isOverTrigger')}
            ref={el => (this._content = el || undefined)}
            style={style}
          >
            {renderContent(
              {},
              {
                ...funcs,
                isOver: this._isOverContent,
              },
            )}
          </div>
        </Portal>,
      );
    }

    return elems;
  }

  public componentDidMount() {
    if (this.isVisible && !this.state.style) {
      this.repaint();
    }
  }

  public componentDidUpdate(prevProps: IPopup) {
    if ((this.isVisible || this._controlled) && (!this.state.style || this.propsChanged(prevProps))) {
      this.repaint();

      if (this.propsChanged(prevProps)) {
        this.forceUpdate();
      }
    }
  }

  private get isVisible() {
    if (this._controlled) {
      return this.props.show || false;
    }

    return this._isOverContent || this._isOverTrigger || false;
  }

  private propsChanged(props: IPopupPosition) {
    return (
      this.props.width !== props.width ||
      this.props.posX !== props.posX ||
      this.props.posY !== props.posY ||
      this.props.padding !== props.padding ||
      this.props.show !== props.show
    );
  }

  private handleMouseEnter = (_isOver: string) => {
    if (this.isVisible || this._controlled) return;
    this[_isOver] = true;
    this.showPopup();
  };

  private handleMouseLeave = (e: any, _isLeaving: string, _isOver: string) => {
    const newTarget = e.toElement || e.relatedTarget;
    if (newTarget === this._content) {
      this[_isOver] = true;
    }

    this[_isLeaving] = false;
    if (!this.isVisible || this._controlled) {
      this.hidePopup();
    }
  };

  private showPopup = () => {
    if (this._willHide) {
      clearTimeout(this._willHide);
      this._willHide = undefined;
    }

    // this just triggers a re-render, so that componentDidUpdate can trigger a repaint
    // after the content element has been rendered
    // we have to do it this way so that repaint can access this._content to calculate dimensions
    this.forceUpdate();
  };

  private hidePopup = () => {
    if (this._willHide) {
      return;
    }

    this._willHide = setTimeout(() => {
      this._isOverTrigger = false;
      this._isOverContent = false;
      this.setState({ style: undefined });
    }, this._hideDelay);
  };

  private repaint = () => {
    if (!this._trigger || !this._content) return;

    // TODO: smart choice based on content size and screen space if this.props.posX not defined
    let posX = this._posX;

    // TODO: smart choice based on content size and screen space if this.props.posY not defined
    const posY = this._posY;

    // calculate the tooltip position
    // this style object will be passed to the renderContent function
    const style: IPopupStyle = {};

    // where on the screen is the target
    const triggerDimensions = this._trigger.getBoundingClientRect();

    // where on the screen is the content, and some basics on its size
    const contentDimensions = this._content.getBoundingClientRect();
    const contentWidth = this._width || contentDimensions.width;

    style.minWidth = triggerDimensions.width + 25;

    if (posY === 'center') {
      if (posX === 'left') {
        posX = 'right';
      } else {
        posX = 'left';
      }
    }

    if (posX === 'left' || posX === 'center') {
      style.left = triggerDimensions.left;

      if (posX === 'center') {
        // center align the popup by taking both the target and popup widths into account
        style.left += triggerDimensions.width / 2 - contentWidth / 2;
      } else {
        style.left -= this._padding;

        // room for tip
        if (posY === 'center') {
          style.left += triggerDimensions.width + this._padding;
        }
      }

      // account for desired offsets
      style.left += this._offset.left || 0;
      style.left -= this._offset.right || 0;

      // make sure it doesn't poke off the left side of the page
      style.left = Math.max(0, style.left);

      let clientWidth = 0;
      if (typeof document !== 'undefined') {
        clientWidth = document.body.clientWidth;
      }

      // or off the right
      style.left = Math.min(style.left, clientWidth - contentWidth - 5);
    } else {
      // right
      // coming in from the right of the screen
      style.right = window.innerWidth - triggerDimensions.left - triggerDimensions.width - this._padding;

      // room for tip
      if (posY === 'center') {
        style.right += triggerDimensions.width + this._padding;
      }

      // account for desired offsets
      style.right -= this._offset.left || 0;
      style.right += this._offset.right || 0;

      // TODO: make sure it doesn't poke off the left side of the page

      // or off the right
      style.right = Math.max(0, style.right);
    }

    if (posY === 'top') {
      // when positioning above, set the bottom of the popup just above the top of the target (it will stretch upwards)
      style.bottom = window.innerHeight - triggerDimensions.top + (this._offset.bottom || 0);
    } else if (posY === 'bottom') {
      // when positioning below, position the top of the popup just below the target (it will stretch downwards)
      style.top = triggerDimensions.top + triggerDimensions.height + (this._offset.top || 0);
    } else {
      style.top = style.top = triggerDimensions.top + triggerDimensions.height / 2 - contentDimensions.height / 2;

      style.top += this._offset.top || 0;
      style.top -= this._offset.bottom || 0;
    }

    if (style.top) {
      // make sure it doesn't poke off the bottom of the page
      style.top = Math.min(window.innerHeight - contentDimensions.height, style.top);

      // make sure it doesn't poke off the top of the page
      style.top = Math.max(0, style.top);

      if (style.top + contentDimensions.height > window.innerHeight) {
        style.bottom = 0;
        style.overflow = 'auto';
      }
    } else if (style.bottom) {
      // make sure it doesn't poke off the top of the page
      style.bottom = Math.min(window.innerHeight, style.bottom);

      // make sure it doesn't poke off the top of the page
      style.bottom = Math.max(0, style.bottom);

      if (style.bottom + contentDimensions.height > window.innerHeight) {
        style.top = 0;
        style.overflow = 'auto';
      }
    }

    this.setState({
      style,
    });
  };

  private get _controlled() {
    return this.props.hasOwnProperty('show') && typeof this.props.show !== 'undefined' ? true : false;
  }

  private get _posX() {
    return this.props.posX || 'left';
  }

  private get _posY() {
    return this.props.posY || 'top';
  }

  private get _width() {
    return this.props.width || undefined;
  }

  private get _padding() {
    return this.props.padding || 15;
  }

  private get _hideDelay() {
    return this.props.hasOwnProperty('hideDelay') ? this.props.hideDelay : 200;
  }

  private get _offset() {
    return Object.assign(
      {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      this.props.offset || {},
    );
  }
}
