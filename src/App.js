import React from 'react';

import {Cards, Chart, CountryPicker} from "./components";
import styles from "./App.module.css";
import coronaImg from "./images/image.png"
import {fetchData} from "./api"

class App extends React.Component{

  state = {
    data : {},
    country : "",
  };

   async componentDidMount(){
      const fetchedData = await fetchData()
      this.setState({
        data : fetchedData
      })
    }

    handleCountryChange = async (country)=>{
      const fetchedData = await fetchData(country)

      this.setState({data : fetchedData, country:country})
      

    }
  render() {
    const {data,country} = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImg} alt="COVID-19"/>
        <h1>Angola</h1>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country ={country}/>
        <p>Bruno Vivaldo</p>
        <a href="https://github.com/BrunoVivaldo" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/bruno-vivaldo/" target="_blank">Linkedin</a>
        <a href="https://twitter.com/BrunVivaldo" target="_blank">Twitter</a>
        <a href="https://www.instagram.com/bruno_vivaldo/" target="_blank">Instagram</a>
        <a href="https://github.com/BrunoVivaldo/covid-angola-version.git" target="_blank" >Código Do Projecto</a>
      </div>
    );
  }
}

export default App;
