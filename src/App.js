import { Fragment, React } from 'react';

import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';

function App() {
  return (
    <Fragment> 
    <BackwardCounter></BackwardCounter> 
    <ForwardCounter></ForwardCounter>
    </Fragment>
  );
}

export default App;
