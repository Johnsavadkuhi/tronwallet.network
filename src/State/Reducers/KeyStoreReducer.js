
const initialState ={
    downloaded :false
};

export default  function KeyStoreReducer (state=initialState , action ) {

    if(action.type==='downloadKeyStore')
    return  {...state , downloaded:action.isDownloaded } ;

    return state ;


}