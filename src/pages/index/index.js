import Taro, { Component } from '@tarojs/taro'
import { View, Text, Checkbox } from '@tarojs/components'
import './index.css'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputValue:'',
      isAllchecked: false,
    }
  }
  addValue(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }

  Change(s){
    this.setState({
      inputValue: s.target.value
    })
  }

  delete(i){
    let newlist = this.state.list;
    newlist.splice(i, 1);
    this.setState({list: newlist})
  }

  chooseAll(){
    this.setState({isAllchecked:true});
  }
  exchooseAll(){
    this.setState({isAllchecked:false});
  }

  render () {
    return (
      <div>
        <p>to do list</p>
        <input value = {this.state.inputValue} onChange = {this.Change.bind(this)}/>
        <button onClick = {this.addValue.bind(this)}>添加</button>
        <ul>
          {
            this.state.list.map((item, i) => {
              return <li>
              <input type = "checkbox" checked = {this.state.isAllchecked}></input>
              <input value={item}/>
              <button onClick = {this.delete.bind(this,i)}>删除</button>
              </li>
            })
          } 
          <button onClick = {this.chooseAll.bind(this)}>全选</button>
          <button onClick = {this.exchooseAll.bind(this)}>取消全选</button>
        </ul>
      </div>
    )
  }
}