import React from 'react';
const ListandKeys=()=>{
    const empDetails=[{
        id:1,
        name:"Harshini",
        age:21,
        course:"FSD"
    },{
        id:2,
        name:"Akash",
        age:30,
        course:"DM"
    },{
        id:3,
        name:"Harish",
        age:25,
        course:"DA"
    }]
    return(
        
    <div  className='text-center'>
        <h1 className='font-bold decoration-dotted'>List And Key</h1>
        {
            empDetails.map(
                // (items,index)=>(
                //     <li key={index}>{items.name}</li>

                // )
                (items)=>(
                    <li key={items.id}>{items.name}</li>

                )
            )
        }

    </div>)
}
export default ListandKeys;

