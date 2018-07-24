import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import {getChangeInputValueAction, getAddListItemAction, getDeleteListItemAction} from './store/actionCreator'
import store from './store/index';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        store.subscribe(this.handleChange)
    }

    render() {
        return (
            <div style={{ marginTop:'5px', marginLeft:'5px'}}>
                <Input
                value={this.state.inputValue}
                placeholder="input placeholder"
                style={{width:'300px',marginRight:'5px'}}
                onChange={this.changeInputValue} />
                <Button type="primary" onClick={this.handleClick}>提交</Button>
                <List
                style={{marginTop : '15px',width:'300px'}}
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (<List.Item onClick={this.handleDeleteItem.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
    changeInputValue(e){
        const action = getChangeInputValueAction(e.target.value)
        store.dispatch(action);
    }
    handleChange(){
        this.setState(store.getState());
    }
    handleClick(){
        const action = getAddListItemAction(this.state.inputValue)
        store.dispatch(action);
    }
    handleDeleteItem(index){
        const action = getDeleteListItemAction(index)
        store.dispatch(action);
    }
}

export default TodoList;