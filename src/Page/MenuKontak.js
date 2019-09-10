import React, {Component} from 'react';

class MenuKontak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alamat : "Jl.Swadaya IV,Pd.Ranggon,Cipayung,Kota Jakarta Timur,Daerah Khusus Ibukota Jakarta 13840",
      kontak : "081312345678"
    };
  }
  render() {
    return(
      <div>
        <h3>{this.state.alamat}</h3>
        <h4>Kontak Kami : {this.state.kontak}</h4>
      </div>
    );
  }
}
export default MenuKontak;
