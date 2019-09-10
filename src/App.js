import React, {Component} from 'react';
import Footer from "./Page/Footer";
import MenuMakanan from "./Page/MenuMakanan";
import Header from "./Page/Header";
import MenuKontak from "./Page/MenuKontak";
import MenuTentangKami from "./Page/MenuTentangKami";

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <br />
        <br />
        <MenuMakanan />
        <MenuTentangKami />
        <MenuKontak />
        <Footer />
      </div>
    );
  }
}

export default App;
