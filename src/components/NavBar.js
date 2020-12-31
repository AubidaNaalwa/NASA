import '../componentsStyle/NavBar.css'

function NavBar() {
  return (

    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/favorites">Favorites</a></li>
        <li className="right">NASA</li>
    </ul>

  );
}

export default NavBar;
