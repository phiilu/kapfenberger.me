import React from 'react';

import PageTitleWrapper from './PageTitleWrapper';
import PageTitleText from './PageTitleText';

export const PageTitle = ({children}) => (
  <PageTitleWrapper>
    <PageTitleText>{children}</PageTitleText>
  </PageTitleWrapper>
);

export default PageTitle;
