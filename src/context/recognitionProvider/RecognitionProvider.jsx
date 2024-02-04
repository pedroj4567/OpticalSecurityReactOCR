import { useState } from 'react';
import RecognitionContext from './RecognitionContext';

const RecognitionProvider = ({children}) =>{

    const [recognition, setRecognition] = useState("it works")

    return (
       < RecognitionContext.Provider value={{
        recognition

       }}>
            {children}
       </ RecognitionContext.Provider>
    )
}

export { RecognitionProvider, RecognitionContext };