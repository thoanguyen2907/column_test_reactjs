import React, { Component } from 'react';
import pic01 from './images/pic_1.jpg'; 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''};
  
  }
  handleChange = (event) => {
    this.setState(
      {number: event.target.value}
      );
  }
  render() {
    let {number} = this.state
    console.log(number)
    return (

  <div className="container">
      <div  className="row">
         <div className="col-6">
         <form className="form-group">
            <label>Number of Column</label>
            <input type="number" name="number"  min="1" max="4" defaultValue={2}  pattern="[1-4]*" value={this.state.number} onChange={this.handleChange}  className="form-control" />
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
