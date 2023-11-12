import { StyledButton } from './Button.styled';

export const Button = ({ onLoadMoreBtn }) => (
  <StyledButton
    onClick={() => {
      onLoadMoreBtn();
    }}
  >
    Load more
  </StyledButton>
);
