
const initialState ={
    downloaded :false
};

export default  function KeyStoreReducer (state=initialState , action ) {

    console.log('Key Store Reducer 8 : ' , {...state} );

    if(action.type==='downloadKeyStore')
    return  {...state , downloaded:action.isDownloaded } ;

    return state ;


}