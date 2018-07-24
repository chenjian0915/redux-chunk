import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM, INIT_LIST} from './actionType';
import axios from "axios";

export const getChangeInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddListItemAction = (item) => ({
    type: ADD_LIST_ITEM,
    item
});

export const getDeleteListItemAction = (index) => ({
    type: DELETE_LIST_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST,
    data
});
export const getTodoListAction = (data) => {
    return (dispatch) => {
        axios('http://localhost:3000/list.json').then((res) => {
            const data = res.data.list;
            const action = initListAction(data);
            dispatch(action);
        })
    }
};

