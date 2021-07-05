import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";
import "./company.css";
import api from "../services/api";
/*===== Importing SVG ================*/

import Stats from "../Icons-svg/stats.svg";
import StarOne1 from "../Icons-svg2/star3.svg";
import LogoFB from "../SVG/facebook2.svg";
import GraphUp from "../Icons-svg/graph-up.svg";
import LogoApl from "../SVG/apple2.svg";
import Graphdown from "../Icons-svg2/graph-down2.svg";
import LogoAD from "../SVG/adobe2.svg";
import LogoMS from "../SVG/microsoft.svg";
import LogoAz from "../SVG/amazon.svg";
/* SWIPER IMPORTING */
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Company extends React.Component {
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
      <div className="company-content">
        <div className="company-area">
          <Swiper
            tag="section"
            wrapperTag="ul"
            spaceBetween={16}
            slidesPerView={2}
            loop={true}
            navigation
            breakpoints={{
              1630: {
                width: 1630,
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
          >
            <div className="company-upDate">
              <div className="recent-company">
                <div className="stats-icon">
                  <img src={Stats} alt="" className="stats" />
                </div>
                <p className="title">Empresas recentes</p>
              </div>
            </div>
            <SwiperSlide tag="li">
              <div className="CompanyList">
                <div className="favStar">
                  <img
                    src={StarOne1}
                    alt=""
                    className="star-one"
                    id="starOne"
                  />
                </div>
                <div className="Company">
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
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className="CompanyList">
                <div className="favStar">
                  <img
                    src={StarOne1}
                    alt=""
                    className="star-one"
                    id="starOne"
                  />
                </div>
                <div className="Company">
                  <div className="company-info">
                    <img src={LogoFB} alt="" className="companyLogo" />
                  </div>
                  <div className="subtitleName">
                    <div className="subtitleName">
                      <div className="abreviationName">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>{empresa.Facebook.symbol}</p>
                        ))}
                      </div>
                      <div className="companyName">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>
                            {empresa.Facebook.companyName}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="priceCompany">
                  <div class="graphUp">
                    {empresas.map((empresa) => (
                      <p className="priceShow" key={empresa._id}>+
                        {empresa.Facebook.lowPrice}%
                      </p>
                    ))}
                    <img src={GraphUp} alt="" className="priceUp" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className="CompanyList">
                <div className="favStar">
                  <img
                    src={StarOne1}
                    alt=""
                    className="star-one"
                    id="starOne"
                  />
                </div>
                <div className="Company">
                  <div className="company-info">
                    <img src={LogoAD} alt="" className="companyLogo" />
                  </div>
                  <div className="subtitleName">
                    <div className="subtitleName">
                      <div className="abreviationName">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>{empresa.Adobe.symbol}</p>
                        ))}
                      </div>
                      <div className="companyName">
                        {empresas.map((empresa) => (
                          <p key={empresa._id}>{empresa.Adobe.companyName}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="priceCompany">
                  <div class="graphUp">
                    {empresas.map((empresa) => (
                      <p className="priceShow" key={empresa._id}>+
                        {empresa.Adobe.lowPrice}%
                      </p>
                    ))}
                    <img src={GraphUp} alt="" className="priceUp" />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide tag="li">
              <div className="CompanyList">
                <div className="favStar">
                  <img
                    src={StarOne1}
                    alt=""
                    className="star-one"
                    id="starOne"
                  />
                </div>
                <div className="Company">
                  <div className="company-info">
                    <img src={LogoAz} alt="" className="companyLogo" />
                  </div>
                  <div className="subtitleName">
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
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className="CompanyList">
                <div className="favStar">
                  <img
                    src={StarOne1}
                    alt=""
                    className="star-one"
                    id="starOne"
                  />
                </div>
                <div className="Company">
                  <div className="company-info">
                    <img src={LogoMS} alt="" className="companyLogo" />
                  </div>
                  <div className="subtitleName">
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Company;
