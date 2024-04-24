import styled from 'styled-components';

const ErrorDisplay = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  width: 100%;
  color: red;
  font-style: italic;
`;

export default ErrorDisplay;