import React from 'react'
import './cardlist.css';
import Card from './Component/Card/card.js';

export const Cardlist=({users})=>{
	return(
			<div>
			{
				users.map(user=> <Card/>)
			}
	
			</div>
		)
}