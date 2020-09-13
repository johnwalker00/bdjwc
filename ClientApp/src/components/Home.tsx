import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>Brush Country Medical Society</h1>
    <p>Welcome to the Brush Country Medical Society serving Brooks, Duval, and  Jim Wells County.</p>

  </div>
);

export default connect()(Home);
