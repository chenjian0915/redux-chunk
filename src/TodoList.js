import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import {getChangeInputValueAction, getAddListItemAction, getDeleteListItemAction, getTodoListAction} from './store/actionCreator'
import store from './store/index';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        store.subscribe(this.handleChange)
    }

    componentDidMount() {
        const action = getTodoListAction();
        store.dispatch(action);
    }

    render() {
        return (
            <TodoListUI
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                changeInputValue = {this.changeInputValue}
                handleClick = {this.handleClick}
                handleDeleteItem = {this.handleDeleteItem}
            />
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