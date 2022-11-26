import Item from "../components/item";
import { Products } from "../components/data";

const HomePage = ()=>{
    const ListItems = Products.map((d) =><div className="list_item" key={d.id} > <Item   item={d} /></div>);
    return(<div style={{display:'grid'}}>
        <h2 style={{margin:'auto',paddingTop:'2vh'}}>BLACK FRIDAY SALE </h2>
        {ListItems }
    </div>)
}
export default HomePage;