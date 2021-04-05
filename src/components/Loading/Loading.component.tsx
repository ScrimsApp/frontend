import { FunctionComponent } from 'react';
import { LoadingIcon, LoadingWrapper } from './loading.styles';

const Loading: FunctionComponent = () => {
  return (
    <LoadingWrapper>
      <LoadingIcon />
    </LoadingWrapper>
  );
};

export default Loading;
