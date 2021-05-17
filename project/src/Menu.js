/*import logo from './logo.svg';
import './App.css'; */
import './Menu.css';

function Menu() {
  return (
    <div className="Menu">
      <header className="Menu-header">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1">Contact</a>
            </li>
        </ul>
        <div id="logo">
                <img src="https://cdn5.vectorstock.com/i/thumb-large/39/94/b-letter-logo-handwritten-with-a-multicolor-vector-31763994.jpg"/>
        </div>
      </header>
      <div className="sec1">
        <h1>SECTION 1</h1>
      </div>
      <div className="sec2">
        <h1>SECTION 2</h1>
      </div>
    </div>
  );
}

export default Menu;
