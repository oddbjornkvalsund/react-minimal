import React from 'react';

import {Hello} from "../tstest/index.tsx";

export const App = (props) => {
  return (
		<div>
			<h1>Hello Oddbjørn!</h1>
			<Hello compiler="TypeScript" framework="React" />
		</div>
  );
}
