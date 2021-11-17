import { Breadcrumbs } from '@mui/material';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f4f4;
    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
    padding: 0;
  }
`;

interface RootProps {
  readonly isLoading: boolean;
}

const Root = styled.div<RootProps>`
  align-items: ${props => props.isLoading ? 'center' : 'initial'};
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  max-width: 580px;
  min-width: 320px;
`;

const Content = styled.div`
  width: 100%;
`;

const BreadcrumbsWrapper = styled(Breadcrumbs)`
  && {
    margin-top: 24px;
    padding: 0 16px;
  }
`;

const BreadcrumbsItem = styled.span`
  font-size: 14px;
  line-height: 18px;
`;

export { GlobalStyle, Root, Content, BreadcrumbsWrapper, BreadcrumbsItem };
