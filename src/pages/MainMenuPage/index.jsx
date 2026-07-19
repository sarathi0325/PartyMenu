import { useState } from 'react'
import {filterMenuItems} from '../../data/menuData'
import './index.css'
import { MdEco } from "react-icons/md"; // Leaf icon
import { GiMeat } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import FoodCard from '../../component/FoodCard';

const categories = ['All', 'Starter', 'Main', 'Sides', 'Desert'];
const diets = ['All', 'Veg', 'Non-Veg'];

const MainMenuPage = () => {
    const [category,setCategory]=useState('All')
    const [diet,setDiet]=useState('All')
    const [search,setSearch]=useState('')
    const [appliedSearch, setAppliedSearch] = useState('')

    const filteredItems = filterMenuItems({
        category,
        diet,
        name: appliedSearch,
    })

  return (
    <div className='main-menu-page-bg'>
        <div className='main-menu-page'>
            <Header />
            <div className='filter-section'>
                <div className="filter-group">
                    <p className='filter-label'>CATEGORY</p>
                    <div className='button-group'>
                        {
                            categories.map(each=>(
                                <button type='button' key={each} onClick={()=>{setCategory(each);setAppliedSearch('');setSearch('');}} className={category===each ? 'active' : 'unactive'}>{each}</button>
                            ))
                        }
                    </div>
                </div>
                <div className="filter-group">
                    <p className='filter-label'>DIETS</p>
                    <div className='button-group'>
                        {
                            diets.map(each=>(
                                <button type='button' key={each} onClick={()=>{setDiet(each);setAppliedSearch('');setSearch('');}} className={diet===each ? 'active' : 'unactive'}>{each==='Veg'? <MdEco className="veg-icon"/> : each==='Non-Veg'? <GiMeat className="non-veg-icon"/> : ''} {each}</button>
                            ))
                        }
                    </div>
                </div>
                <div className='search-container'>
                    <input placeholder='Search by name (e.g. chicken)' value={search} type='search' onChange={(e)=>{setSearch(e.target.value)}}/>
                    <button onClick={()=>{setAppliedSearch(search)}} type='button'>Search</button>
                </div>
            </div>
            <div className="menu-grid-container">
                <p className="item-count">{filteredItems.length} items found</p>

                {filteredItems.length > 0 ? (
                    <ul className="menu-grid">
                        {filteredItems.map(item => (
                            <li key={item.id}>
                                <Link to={`/menu/${item.id}`}>
                                    <FoodCard item={item} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="empty-state">
                        <p>No dishes found. Try different filters.</p>
                    </div>
                )}
           </div>
        </div>
    </div>
  )
}

export default MainMenuPage
