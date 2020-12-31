import Snackbar from '@material-ui/core/Snackbar';
import { useEffect, useState } from 'react';
import MediaCard from './MediaCard'
const axios = require('axios')

function Favorites() {
  const [images, setImages] = useState([])
  const[remove,setRemove] =useState(false)

  const searchForImages = async () => {
      let results = await axios.get(`http://localhost:3030/images`)
      results = results.data.map(v => {return {id:v._id, img:{title:v.title, description:v.description,url:v.url}}})
      setImages(results)
  }

  const deleteImg = async (id) => {
    const result = await axios.delete('http://localhost:3030/image/'+id)
    if(result.status != 200){
        alert('error')
      }else{
        alert('removed')
        setRemove(!remove)
    }
}

useEffect(()=>{
  searchForImages()
},[remove])

  return (
    <div id="Favorites">
            <div id="searchResults">
                {images.map(v => <MediaCard img={v.img} id={v.id}key = {v.id} deleteImg ={deleteImg} liked ={true}/>)}
            </div>
          
    </div>

  );
}

export default Favorites;
