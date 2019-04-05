
export const  Counter = (state  , action )=>{

    console.log("state of Counter : " , state );

    switch (action.type) {

        case 'increment':

            return state= state + 1 ;


        default : return state ;

    }


};

