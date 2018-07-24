import React,{Component} from 'react';
import {Button, Input, List} from "antd";

export default class TodoListUI extends Component {
    render(){
        return (
            <div style={{ marginTop:'5px', marginLeft:'5px'}}>
                <Input
                    value={this.props.inputValue}
                    placeholder="input placeholder"
                    style={{width:'300px',marginRight:'5px'}}
                    onChange={this.props.changeInputValue} />
                <Button type="primary" onClick={this.props.handleClick}>提交</Button>
                <List
                    style={{marginTop : '15px',width:'300px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={()=>{this.props.handleDeleteItem(index)}}>{item}</List.Item>)}
                />
            </div>
        )
    }
}
