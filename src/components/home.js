import React from "react";
import Header from "./header";
import Rechart from "./rechart";
import Company from "./company";
import Favorite from "./favorite";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

/*====== SVG IMPORT =====*/
import DashLogo from "../Icons-svg/dashboard.svg";
import SearchSvg from "../Icons-svg/search.svg";
import StarOne from "../Icons-svg/Name=Star2.svg";
import GraphDown from "../Icons-svg/graph-down.svg";
import "../root.css";
import "./home.css";
import api from "../services/api";

class Home1 extends React.Component {
  state = {
    empresas:[],
  };
  async componentDidMount() {
    const response = await api.get("");
    this.setState({ empresas: response.data});
  }
  render() {
    const { empresas } = this.state;
    
    return (
      <div className="Home" id="Home">
        <div className="App-content">
          <Header />
          <div className="dashboard-home">
            <div className="dashboard-content">
              <div className="tilte_logo">
                <img src={DashLogo} alt="" className="dash-logo" />
                <h1 className="dash-tilte">Dashboard</h1>
              </div>
              <div className="dash-search">
                <input
                  type="text"
                  placeholder="Buscar Empresa"
                  className="input-area"
                  id="input-area"
                />
                <div className="search-icon" id="search-icon">
                  <img src={SearchSvg} alt="" className="search-svg" />
                </div>
              </div>
              <div className="rechart">
                <div className="information">
                  <div className="info-content">
                    <div className="fav-star">
                      <Tippy content="Adicionar favoritos" className="typpy">
                        <img
                          src={StarOne}
                          alt="star"
                          className="star-one"
                          id="star-one"
                        />
                      </Tippy>
                    </div>
                    <div className="company">
                      <div className="abreviation-name">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>{empresa.Microsoft.symbol}</p>
                        ))}
                      </div>
                      <div className="company-name">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>
                            {empresa.Microsoft.companyName}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="price-company">
                    <div class="graphDown">
                      <img src={GraphDown} alt="" className="price-up" />
                      <div className="price">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>
                            {empresa.Microsoft.latestPrice}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="price-percent">
                      {empresas.map((empresa) => (
                        <p key={empresa._id}>
                          $-{empresa.Microsoft.lowPrice} (
                          {empresa.Microsoft.lowPrice}%)
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <Rechart />
              </div>
            </div>
            <Company />
          </div>
          <div className="home-favorite">
            <Favorite />
          </div>
        </div>
      </div>
    );
  }
}
export default Home1;
