import { useState } from "react"
import Row from "./Row"
export default function Board(){
    const[change,setChange]=useState(false)
    const reload = ()=>{
        setChange(!change)
    }

        return(
        <tbody>
        <Row index={0} reload={reload}/>
        <Row index={1} reload={reload}/>
        <Row index={2} reload={reload}/>
        </tbody>
    )
}