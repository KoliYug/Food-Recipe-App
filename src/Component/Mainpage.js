import React, { useState } from 'react'
import Mealcards from './Mealcards'

const Mainpage = () => {
    const[data, setData] = useState()
    const[search, setSearch] = useState("")
    const[msg, setMsg] = useState("")


    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const myFun = async () => {
        if(search ===""){
            setMsg("Please enter a dish name")
        }else{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsonData = await get.json()
        // console.log(jsonData.meals);
        setData(jsonData.meals)
        setMsg("")
        }
    }
    // console.log(data);
    return(
        <>
           <div style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1556909211-36987daf7b4d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <h1 style={{ textAlign: 'center' }}>Food Recipe App</h1>
            <div className='container'>
                <div className='searchBar'>
                    <input type='text' placeholder='Search a Dish' onChange={handleInput}/>
                    <button onClick={myFun}>Search</button>
                </div>
                <h4 style={{ textAlign: 'center', color: 'red' }}>{msg}</h4>
                <div>
                    <Mealcards detail={data}/>
                </div>
            </div>
            </div> 
        </>
    )
}

export default Mainpage