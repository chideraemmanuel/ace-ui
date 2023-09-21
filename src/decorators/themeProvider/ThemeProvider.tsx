import React from 'react';
import './ThemeProvider.scss';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export default ThemeProvider;
