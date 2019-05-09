import React from 'react';
import {Component} from 'react';
import './Bottom.css';
import Content from '../Content/Content';

class Bottom extends Component {
  constructor(){
    super();
    this.state={
      options:0
    };
  }
  cl=(opt)=>{
    this.setState({options:opt})
  }
  render(){
    return (
      <div className='total' style={{marginTop:'5%'}}>
        <div className='toolbaritems'>
          <label onClick={()=>this.cl(1)}>Stackoverflow</label>
          <label onClick={()=>this.cl(2)}>Goodreads</label>
          <label onClick={()=>this.cl(3)}>Codeforces</label>
        </div>
        <div className='contentclass'>
          <Content options={this.state.options}></Content>
        </div>
      </div>
    );
  }
}

export default Bottom;
