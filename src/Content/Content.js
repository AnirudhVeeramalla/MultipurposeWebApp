import React from 'react';
import GrComponent from '../GrComponent/GrComponent';
import StackOverflowMain from '../StackOverflow/StackOverflowMain';
import StackOverflow from '../StackOverflow/StackOverflow';
import CodeforcesMain from '../Codeforces/CodeforcesMain';
import fetch from 'node-fetch';
var stackexchange = require('stackexchange');
var options = { version: 2.2 };
var context = new stackexchange(options);
var filter = {
  key: '',
  pagesize: 50,
  tagged: 'node.js',
  sort: 'activity',
  order: 'asc'
};
const Content=({options})=>{
  if (options===0){
    return (<div>option1</div>);
  }
  if(options===1){
    return (
    <div>
      <StackOverflowMain ></StackOverflowMain>
    </div>); 
  }
  if(options===2){
    return (<GrComponent></GrComponent>);
  }
  if(options===3){
    return (<CodeforcesMain></CodeforcesMain>);
  }
}

export default Content;
