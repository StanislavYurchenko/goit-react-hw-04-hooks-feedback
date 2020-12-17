import React from 'react';
import { Container } from './LayoutStyles';

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
