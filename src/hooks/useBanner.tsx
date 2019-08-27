import * as React from 'react';
import { useSiteData } from 'react-static';

const BannerVisibilityContext = React.createContext<any | null>([true, () => {}]);

export const useBanner = () => {
  return React.useContext(BannerVisibilityContext);
};

export const BannerVisibilityProvider = ({ children }) => {
  const { banners } = useSiteData();

  const [showBanner, setShowBanner] = React.useState(Boolean(banners && banners.length));

  return (
    <BannerVisibilityContext.Provider value={[showBanner, setShowBanner]}>{children}</BannerVisibilityContext.Provider>
  );
};
