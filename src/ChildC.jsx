import React, { useContext } from  'react';
import { useRef } from 'react';
import { data , data2} from './index';


function ChildC(){
    const name1 = useContext(data);
    const name2 = useContext(data2)
    
    return(<>
    {/* <data.Consumer>
        {
            (name)=>{
                
                return(<>
                    <data2.Consumer>
                        {
                            (name2)=>{
                                return(<>
                                    <h1>My name is{name}</h1>
                                    <h1>My name is{name2}</h1>
                                </>)
                            }
                        }
                    </data2.Consumer>
                </>)
            }
        }
        </data.Consumer> */}
        <h1>My name is {name1}</h1>
        <h1>My name is {name2}</h1>
        </>)
        }

export default ChildC;