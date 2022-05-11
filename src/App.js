import './App.css';
import React, {useState} from "react";
import Axios from 'axios';

function App() {
  const [cliNom, setCliNom] = useState('');
  const [cliPrenom, setCliPrenom] = useState('');
  const [cliEmail, setCliEmail] = useState('');
  const [prodNom, setProdNom] = useState('');
  const [prodAvis, setProdAvis] = useState('');
  const submitAvis = () => {
    Axios.post('http://localhost/3006/api/insert', {CliNom: cliNom, CliPrenom: cliPrenom}).then(() => {
      alert("Inséré les données du client avec succès !");
    });
  }
  return (
    <div className="App">
      <h2>Formulaire de feeback</h2>
      <h3>Êtes-vous content du service/produit proposé ? Veuillez laisser votre avis en cliquant sur le pouce vert si vous êtes content sinon sur le pouce rouge.</h3>
      <form className="form">
        <form className="info_personnels form-group">
          <fieldset>
            <legend>Informations personnelles</legend>
            <label for="nom">Nom</label>          
            <input type="text" name="nom" onChange={(e) => {
              setCliNom(e.target.value);
            }}></input>
            <label for="prenom">Prénom</label>
            <input type="text" name="prenom" onChange={(e) => {
              setCliPrenom(e.target.value);
            }}></input>
            <label for="email">Email</label>
            <input type="email" name="email" onChange={(e) => {
              setCliEmail(e.target.value);
            }}></input>
          </fieldset>
        </form>
        <div className="info_produit">
          <fieldset>
            <legend>Informations sur le produit</legend>
            <label for="nom_prod">Nom du produit</label>
            <input type="text" id="nom_prod" onChange={(e) => {
              setProdNom(e.target.value);
            }}></input>
          </fieldset>
          <div className="avis_produit">
            <legend>Votre avis sur le produit</legend>
            <input type="radio" name="avis_prod" id="pouce_vert" onChange={(e) => {
              setProdAvis(e.target.value);
            }}></input>
            <img src="./images/pouce_vert.png" alt="Pouce vert"></img>
            <input type="radio" name="avis_prod" id="pouce-rouge" onChange={(e) => {
              setProdAvis(e.target.value);
            }}></input>
            <img src="./images/pouce_rouge.png" alt="Pouce rouge"></img>
          </div>
        </div>
        <button type="submit" onClick={submitAvis}>Envoyer</button>
      </form>
    </div>
  );
}

export default App;
