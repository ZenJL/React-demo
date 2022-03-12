import * as React from 'react';

// components
import Spinner from 'components/Spinner';

// Routes
import RoutesMain from 'routes/Routes';

export default function App() {
  return (
    <>
      <RoutesMain />

      <Spinner />
    </>
  );
}
