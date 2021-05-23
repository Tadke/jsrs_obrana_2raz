import { Component } from 'react';
import '../App.css';
import Header from "../Header.js";
import Sjedala from "../sjedala.jpg";
import Footer from "../Footer.js";


export class Forma extends Component{  render(){
    return (
        <div className="Forma">
          <Header/>
          <br/><br/><br/>
            <form className="forma2">
            <h4>Ime:</h4><input type="name" className="ime"/> <br/>

            <h4>Prezime:</h4><input type="name" className="ime"/> <br/>

            <h4>Email:</h4><input type="name" className="ime"/> <br/>
            
            <h4>Lozinka:</h4><input type="password" className="ime"/>
  
          </form>
         
          <img src={Sjedala} className="sjedala2"/> <br/>

          <Footer/>
        </div>
      );
    }
}


export default Forma;