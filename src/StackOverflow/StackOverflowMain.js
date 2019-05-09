import React,{Component} from 'react';
import StackOverflow from '../StackOverflow/StackOverflow';
let r=null;
retrieve1();
async function retrieve1(){
  r=await retrieve2();
}
async function retrieve2(){
  return await fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow').then((res)=>res.json());
}
const StackOverflowMain=()=>{
	console.log(r);
	r['items'].forEach((item)=>{
		console.log(item['answer_count']+" "+item['score']+" "+item['view_count']+' '+item['title']+item['is_answered']+' '+(new Date(item['creation_date'])));
	})
	let details=[]
	r['items'].forEach((item)=>{
		let temp={
			acnt:item['answer_count'],
			score:item['score'],
			views:item['view_count'],
			title:item['title'],
			isans:item['is_answered'],
			askedby:item['owner']['display_name'],
			link:item['link']
		}
		details.push(temp);
	})
	return (<StackOverflow details={details}></StackOverflow>);
}
export default StackOverflowMain;