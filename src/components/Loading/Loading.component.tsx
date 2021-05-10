import { FunctionComponent } from 'react';
import { LoadingIcon, LoadingWrapper } from './loading.styles';

import { LoadingProps } from './types';

const Loading: FunctionComponent<LoadingProps> = ({ fullPage }) => {
  return (
    <LoadingWrapper fullPage={fullPage}>
      <LoadingIcon />
    </LoadingWrapper>
  );
};

export default Loading;
