import { NavLink } from "react-router-dom"

export default function Item({item }) {
    return(
        <div style={{display:'flex' ,flexDirection:'row' , width:'80%',left:'10%', height:'25vh' , border:'1px solid black'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',position:'relative',left:'1vw'}}>
                <div ><h2><b><span>Title:</span> {item.names}</b></h2></div>
                <div ><h2><b>Price: {item.price} &#8362;</b></h2></div>
                <NavLink to={`Product/${item.id}`}><button style={{border:'1px solid black',borderRadius:'8%' ,backgroundColor:'white',height:'3vh'}}><b>EXTEND</b></button></NavLink>
            </div>
            <img style={{position:'absolute',right:'22%',top:'2.5vh'}} src={item.image ?item.image[0]:null} alt="first" height={'200px'} width={'200px'} loading="lazy"></img>
           
           
        </div>
    )

}