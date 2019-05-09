import React from 'react';
import StackOverflowSingle from '../StackOverflow/StackOverflowSingle';

const StackOverflow=({details})=>{
	console.log(details);
	let arr=[]
	details.forEach((detail)=>{
		arr.push(
			<StackOverflowSingle acnt={detail['acnt']}
								 score={detail['score']}
								 views={detail['views']}
								 title={detail['title']}
								 isans={detail['isans']}
								 askedby={detail['askedby']}
								 link={detail['link']}></StackOverflowSingle>
								 )
	})
	return	arr;
}
export default StackOverflow;