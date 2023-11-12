import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = styled(ThreeDots)`
    height:"80"
    width="80"
    radius="9"
    color={p => p.theme.colors.blue}
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
`


() => (
  <ThreeDots
    
  />
);