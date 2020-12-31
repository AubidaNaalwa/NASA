import {useState } from 'react';
import MediaCard from './MediaCard'
import CustomizedSnackbar  from './SnackBar';
const axios = require('axios')


function Search() {
    const [images, setImages] = useState([])

    const searchForImages = async (e) => {
        if (e.key !== 'Enter') {
            return
        }
        let results = await axios.get(`https://images-api.nasa.gov/search?q=${e.target.value}&media_type=image`)
        results = results.data.collection.items.map(v => { return {id : v.data[0].nasa_id,img:{ title: v.data[0].title || '', description: v.data[0].description || '', url: v.links[0].href || ''}} })
        setImages(results)
    }

    const saveImage = async (img) => {
        const result = await axios.post('http://localhost:3030/image', 
        img
        )
        if(result.err){
            console.log(result.err)
            return(
                <CustomizedSnackbar success ={false} />
            ) 
        }else{
            <CustomizedSnackbar success ={true}/>
        }
    }

    return (
        <div id="search">
            <div id="searchContainer">
                <div class="group" >
                    <input type="text" required onKeyDown={searchForImages} />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>search</label>
                </div>
            </div>
            <div id="searchResults">
                {images.map(v => <MediaCard img={v.img} key = {v.id} saveImage={saveImage}/>)}
            </div>
        </div>

    );
}

export default Search;