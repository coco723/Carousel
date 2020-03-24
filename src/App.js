import React, {Component} from 'react';
import './index.css'
// 怎么去引入图片？
import img1 from './imgs/39c6bef6cc8b39b3340a4645a2c11fee.jpg';
import img2 from './imgs/714208d4e10499868688361130d1d2e3.jpg'
import img3 from './imgs/f4420603772a4db7912c1e31b24e45df.jpg'
var images = [img1, img2, img3];

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      index: 0
    }
  }
  _goNext() {
    var { index } = this.state;
    if (index === images.length - 1) {
      index = 0;
    } else {
      index++
    }
    this.setState({
      index
    })
  }
  _goPre() {
    var { index } = this.state;
    if (index === 0) {
      index = images.length - 1;
    } else {
      index--;
    }
    this.setState({
      index
    })
  }
 render() {
   var { index } = this.state;
   return (
     <div className="wrap">
      <ul className="list">
        {
          /**map 中key的使用， return（） */
          images.map((item, i) => (
            <li className={`item ${index === i? 'active' : ''}`} key={i}><img src={item} alt=""/></li>
          ))
        }
      </ul>
      {/*在jsx < 标签的开始 */}
      <button className="btn left" onClick={() => this._goPre()}> {'<'} </button>
      <button className="btn right" onClick={() => this._goNext()}> {'>'} </button>
    </div>
   )
 }
}

export default App;
