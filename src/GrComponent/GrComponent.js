import React,{Component} from 'react';
import GoodReads from 'react-goodreads';

class GrComponent extends Component {
  render() {
    return (
      <div className="App">
        <header className="myapp">
        <GoodReads apikey="4N2UvlvaSKoQU1MJ32tXyQ"/>
        </header>
      </div>
    );
  }
}
export default GrComponent;
