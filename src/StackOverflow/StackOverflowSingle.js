import React,{Component} from 'react';
import './StackOverflowSingle.css';
const StackOverflowsingle=({acnt,score,views,title,isans,askedby,link})=>{
	return (
		<div className='cont'>
			{isans?
				 <span className='small acc'>{acnt}<br/>answers</span>:
				 <span className='small rej'>{acnt}<br/>answers</span>
			}
			<span className='small'>{score}<br/>score
			</span>
			<span className='small'>{views}<br/>views
			</span>
			<span className='quest'>
				<span className='big'><a href={link} target="_blank">{title}</a>
				</span>
				<span className='time'><small>asked by {askedby}</small></span>
			</span>
		</div>
	);
}
export default StackOverflowsingle;