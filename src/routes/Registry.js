import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Registry() {

    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error,setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if(error) return;

        const tempData = [...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
        
    }

    useEffect(()=>{

        if(textInput.length > 10) setError(true);
        else setError(false)

    }, [textInput])

    // console.log(registryData)

    const removeItem = (index) => {
        let newData = [...registryData]
        newData.splice(index,1)
        setRegistryData(newData)
    }

    const editItem = (index) => {
        if(error) return;

        let newData = [...registryData]
        newData[index] = textInput;

        setRegistryData(newData)
    }

    return (

        <div>
            <h1>Registro</h1>
            <Link to="/">Volver a Home!!</Link>
            <form onSubmit={addItem}>
                <label htmlFor="">Text Input:
            <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
            </label>
            <input type="submit" value="Submit"/>
            </form>
            {error ? <span style={{color: "red"}}>Error ocurrido</span> : null}
            {

                registryData.map((item, index) => {

                    return(
                        <div>
                    <li key={index}>{item}</li> <button type="button" onClick={() => removeItem(index)}>Remove</button><button type="button" onClick={() => editItem(index)}>Edit</button>

                    </div>
                    )

                })

            }
        </div>

    );

}

export default Registry;