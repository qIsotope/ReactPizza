import React from 'react';
import InputMask from 'react-input-mask';

export const Input = (props) => (
	<InputMask mask="+(380) 99 99 99 999" {...props}>
	</InputMask>
);