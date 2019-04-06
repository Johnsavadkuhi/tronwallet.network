
const initialStates ={

    address :'',
    privateKey:''
};

export default  function (state = initialStates , action ) {

    if(action.type === 'account')
    return {...state ,  'address':action.address , 'privateKey':action.privateKey}

    return state;

}
