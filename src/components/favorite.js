import React from "react";
import "./favorite.css";
import { Link } from "react-router-dom";
import api from "../services/api";
/*===== Importing SVG ================*/

import Star from "../Icons-svg/star.svg";
import GraphUp from "../Icons-svg/graph-up.svg";
import Delate from "../Icons-svg/delate.svg";
import LogoApl from "../SVG/apple2.svg";
import Graphdown from "../Icons-svg2/graph-down2.svg";
import Arrow from "../Icons-svg/Vector.svg";
import Perfil from "../SVG/perfil.png";
import LogoMS from "../SVG/microsoft.svg";
import LogoAz from "../SVG/amazon.svg";

class Favorite extends React.Component {
  state = {
    empresas: [],
  };
  async componentDidMount() {
    const response = await api.get("");

    this.setState({ empresas: response.data });
  }
  render() {
    const { empresas } = this.state;
    return (
      <>
        <div className="favorite-home">
          <div className="Content">
            <div className="favorite-content">
              <div className="perfil">
                <img src={Perfil} alt="" className="perfil-logo" />
              </div>
              <div className="Name">
                <p className="perfil-name">João da Silva Almeida Magalhães</p>
              </div>
              <div className="arrow">
                <img src={Arrow} alt="" className="seta" />
              </div>
            </div>

            <div className="favorite-company" id="favoriteComany">
              <div className="recent-company">
                <div className="stats-icon">
                  <img src={Star} alt="" className="star-one" />
                </div>
                <p className="title">Empresas favoritas</p>
              </div>
            </div>

            <div className="myCompany">
              <div className="myList">
                <div className="CompanyList" id="CompanyList">
                  <div className="Company" id="Company">
                    <div className="company-info">
                      <img src={LogoApl} alt="" className="companyLogo" />
                    </div>
                    <div className="subtitleName">
                      <div className="abreviationName">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>{empresa.Aplle.symbol}</p>
                        ))}
                      </div>
                      <div className="companyName">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>{empresa.Aplle.companyName}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="priceCompany">
                    <div class="graphUp">
                      {empresas.map((empresa) => (
                        <p className="priceShow2" key={empresa._id}>-
                          {empresa.Aplle.lowPrice}%
                        </p>
                      ))}
                      <img src={Graphdown} alt="" className="priceUp" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="delateList">
                <img src={Delate} alt="" className="delate-icon" />
              </div>
            </div>

            <div className="myCompany">
              <div className="myList">
                <div className="CompanyList" id="CompanyList">
                  <div className="Company" id="Company">
                    <div className="company-info">
                      <img src={LogoAz} alt="" className="companyLogo" />
                    </div>
                    <div className="subtitleName">
                      <div className="abreviationName">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>{empresa.Amazon.symbol}</p>
                        ))}
                      </div>
                      <div className="companyName">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>{empresa.Amazon.companyName}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="priceCompany">
                    <div class="graphUp">
                      {empresas.map((empresa) => (
                        <p className="priceShow2" key={empresa._id}>-
                          {empresa.Amazon.lowPrice}%
                        </p>
                      ))}
                      <img src={Graphdown} alt="" className="priceUp" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="delateList">
                <img src={Delate} alt="" className="delate-icon" />
              </div>
            </div>

            <div className="myCompany">
              <div className="myList">
                <div className="CompanyList" id="CompanyList">
                  <div className="Company" id="Company">
                    <div className="company-info">
                      <img src={LogoMS} alt="" className="companyLogo" />
                    </div>
                    <div className="subtitleName">
                      <div className="abreviationName">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>{empresa.Microsoft.symbol}</p>
                        ))}
                      </div>
                      <div className="companyName">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>
                            {empresa.Microsoft.companyName}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="priceCompany">
                    <div class="graphUp">
                      {empresas.map((empresa) => (
                        <p className="priceShow" key={empresa._id}>+
                          {empresa.Microsoft.lowPrice}%
                        </p>
                      ))}
                      <img src={GraphUp} alt="" className="priceUp" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="delateList">
                <img src={Delate} alt="" className="delate-icon" />
              </div>
            </div>
          </div>
        </div>
        <Link to={{ pathname: "./" }} className="favorite-btn">
          Voltar
        </Link>
      </>
    );
  }
}

export default Favorite;
