import React, { Component } from 'react';
import { Rings } from 'react-loader-spinner';
import s from './Loader.module.css'


export default class Loader extends Component {
	render() {
		return (
			<div className={s.LoaderBox}>
					<Rings
						heigth='100'
						width='100'
						color='#3f51b5'
						ariaLabel='loading'
					/>

			</div>
		);
	}
}