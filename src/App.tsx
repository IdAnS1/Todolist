import {  createContext, useContext, useState } from 'react'
import './App.css'
 

export function App() {
    const [count, setCount] = useState(0)
    const [boolean, setBoolean] = useState(true)
    const contextTest = useContext(ContextReact)
    const handlerClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCount(count + 1)
        console.log(event.target)
        setBoolean(!boolean)
        contextTest?.setTextTest(boolean ? {name: 'Vite'}:{name: 'React'})
    }
    return(
        <div>
            <h1>Hello{count}</h1>
            <h1>{contextTest?.textTest?.name}</h1>
            <button onClick={handlerClick}>Click</button>  
            <ul>
                <li><input defaultChecked={true} type="checkbox"/><span>React</span></li>
                <li><input defaultChecked={false} type="checkbox"/><span>Vue</span></li>
                <li><input defaultChecked={false} type="checkbox"/><span>Angular</span></li>
            </ul>
        </div> 
    )
	
} 

interface TextTest {
    name: string
}
interface ContextTest {
    textTest: TextTest
    setTextTest: (text: TextTest) => void
}

export const ContextReact = createContext({} as ContextTest)
export function ContextTest({children}: {children: React.ReactNode}) {

    const [textTest, setTextTest] = useState<TextTest>({name: 'React'})

    return(
        <ContextReact.Provider value={{textTest, setTextTest} as ContextTest} >
            {children}
        </ContextReact.Provider>
    )
}
         
   