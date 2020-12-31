import MediaCard from './MediaCard'

function Home() {
    
  return (
    <div id="Home">
        <MediaCard img={{url:"https://www.nasa.gov/sites/default/files/thumbnails/image/potw2039a.jpg", title:"Galaxy", description:"A colorful collection of galaxy specimens from NASA Wide-field Infrared Survey Explorer mission showcases galaxies of several types, from elegant grand design spirals to more patchy flocculent spirals."}}/>
    </div>
  );
}

export default Home;
