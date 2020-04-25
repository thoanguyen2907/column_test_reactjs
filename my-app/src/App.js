import React, { Component } from 'react';
import Validate  from './libs/validate'; 
import pic01 from './images/pic_1.jpg'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 2};
  
  }
  // handleChange = (event) => {
  //   let input = parseInt(event.target.value);
  //   if(isNaN(input) || input <1 || input > 4){
  //     alert('fdas')
  //   }else {
  //     this.setState({number: input})
  //   } 
  //   } 
  
    handleChange = (event) => {
      let input = parseInt(event.target.value);
      if(Validate.checkNum(input)===false){
        alert('please enter correct number')
      }else {
        this.setState({number: input})
      } 
      event.preventDefault();
      } 
      
  render() {
    let {number} = this.state;
    console.log(number);
    return (

  <div className="container">
    <p>Please a number between 1 and 4</p>
      <div  className="row">
         <div className="col-6">
         <form className="form-group">
            <label>Number of Column</label>
            <input type="number" name="number" value={number} onChange={this.handleChange}   className="form-control" />
        </form>
      </div>
    </div>
 <div  className="row">
      <div className={`col-${number}`}>
        <div className="card">
          <img className="card-img-top" src={pic01} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
       <div className={`col-${number}`}>
        <div className="card">
          <img className="card-img-top" src={pic01} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className={`col-${number}`}>
        <div  className="card">
          <img className="card-img-top" src={pic01} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className={`col-${number}`}>
        <div  className="card">
          <img className="card-img-top" src={pic01}alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className={`col-${number}`}>
        <div  className="card">
          <img className="card-img-top" src={pic01} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className={`col-${number}`}>
        <div  className="card">
          <img className="card-img-top" src={pic01} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className={`col-${number}`}>
        <div  className="card">
          <img className="card-img-top" src={pic01} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className={`col-${number}`}>
        <div  className="card">
          <img className="card-img-top" src={pic01} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className={`col-${number}`}>
        <div className="card">
          <img className="card-img-top" src={pic01} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className={`col-${number}`}>
        <div  className="card">
          <img className="card-img-top" src={pic01} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      
      

      </div>
      </div>

    );
  }
}

export default App;
