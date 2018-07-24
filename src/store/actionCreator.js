import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM,} from './actionType';

export const getChangeInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddListItemAction = (item) => ({
    type: ADD_LIST_ITEM,
    item
})

export const getDeleteListItemAction = (index) => ({
    type: DELETE_LIST_ITEM,
    index
});