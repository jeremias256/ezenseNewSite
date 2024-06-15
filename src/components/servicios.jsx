import React from "react";
import "../css/servicios.css";
import TituloSeccionWhite from "../components/tituloSeccionWhite";

export const Servicios = () => {
  return (
    <div className="servicios_content px-[16px] py-0 mt-[60px]" id="services">
      <div className="servicios-back  relative m-auto mx-auto w-full max-w-[1440px] overflow-hidden rounded-[24px]">
        <div className="servicios-back2 px-[16px] py-[30px] lg:py-[60px] lg:px-[36px]">
          <div className="servicios" >
            <TituloSeccionWhite titulo="Services" />

            <div className="servicio-subTitulo">
              <span className="text-md-lato-700 white">
                Unites aesthetic innovation with technical prowess.{" "}
              </span>

              <span className="text-md-lato-400 white">
                From strategic planning that charts your digital destiny to
                Intuitive UX Design paired with advanced Coding Techniques, we
                architect and implement ideas into impactful digital realities{" "}
              </span>
            </div>

            <div className="servicio-combo px-[16px] lg:px-[30px] lg:py-[16px]">

              <div className="sc-c1 hidden lg:flex">
                <div className="lg:h-[38px] lg:w-[341px] lg:border-b-[2px] lg:border-[#ff3d00]"></div>
                <div className="sc-c1-f2"></div>
              </div>

              <div className="sc-c2 w-[16px] lg:w-[78px]">

                <div className="
                  lg:h-[38px]
                  sm:h-[37.5px]
                  lg:w-[78px] 
                  border-b-[2px] 
                  border-[#ff3d00]">

                </div>

                <div className="lg:h-[160px] sm:h-[160px]">

                </div>

                <div className="sc-c2-f2 
                  lg:h-[163px]
                  sm:h-[163px]
                  lg:w-[78px]
                  lg:border-[2px]
                  lg:border-[#ff3d00]
                  lg:border-r-0
                  lg:rounded-tl-[555px]
                  lg:rounded-bl-[555px]
                  flex
                  flex-col
                  items-end
                  lg:pt-[63.5px]
                  sm:pt-[63px]
                  sm:border-t-[2px]
                  sm:border-b-[2px]
                  sm:border-[#ff3d00]

                  ">

                  <div className="sc-c2-f2-f1
                      h-[32.5px]
                      w-[16px]
                      border-[1px]
                      border-[white]
                      border-r-[0]
                      rounded-tl-[555px]
                      rounded-bl-[555px]
                     ">

                  </div>
                </div>

                <div className="lg:h-[160px]  sm:h-[160px]">

                </div>

                <div className="sc-c2-f2 
                  lg:h-[163px]
                  sm:h-[163px]
                  lg:w-[78px];
                  lg:border-[2px]
                  lg:border-[#ff3d00]
                  lg:border-r-0
                  lg:rounded-tl-[555px]
                  lg:rounded-bl-[555px]
                  flex
                  flex-col
                  items-end
                  lg:pt-[63.5px]
                  sm:pt-[63.5px]
                  sm:border-t-[2px]
                  sm:border-[#ff3d00]
                  sm:border-b-[2px]"
                >

                  <div className="sc-c2-f2-f1
                      h-[33px]
                      w-[16px]
                      border-[1px]
                      border-[white]
                      border-r-[0]
                      rounded-tl-[555px]
                      rounded-bl-[555px]
                      ">

                  </div>
                </div>

              </div>

              <div className="sc-c3" >

                {/*Web Development */}
                <div className="border-b-[2px] border-[#ff3d00]">
                  <span className="text-md-lato-700 call-to-action">
                    Web Development
                  </span>
                </div>

                <div className="sc-content-subSerivicio w-[350px] lg:w-[692px]">

                  <div className="sc-rounded-left ">

                  </div>

                  <div className="sc-list-subservicio">

                    <div className="sc-subServicio pl-[0px] lg:pl-[404px]">
                      <span className="text-sm-nunito-400 white">
                        Platform-Agnostic Solutions
                      </span>
                    </div>

                    <div className="sc-subServicio pl-[0px] lg:pl-[404px]">
                      <span className="text-sm-nunito-400 white">
                        Seamless Service Integration
                      </span>
                    </div>

                    <div className="sc-subServicio pl-[0px] lg:pl-[404px]">
                      <span className="text-sm-nunito-400 white">
                        Seamless Service Integration
                      </span>
                    </div>



                  </div>


                </div>

                {/* Ui/UX Design */}
                <div className="border-b-[2px] border-[#ff3d00]">
                  <span className="text-md-lato-700 call-to-action">
                    Ui/UX Design
                  </span>
                </div>

                <div className="sc-content-subSerivicio">
                  <div className="sc-list-subservicio">
                    <div className="sc-subServicio pl-[16px] lg:pl-[420px]">
                      <span className="text-sm-nunito-400 white">
                        Intuitive User Interfaces
                      </span>
                    </div>
                    <div className="sc-subServicio pl-[16px] lg:pl-[420px]">
                      <span className="text-sm-nunito-400 white">
                        Responsive Design
                      </span>
                    </div>
                    <div className="sc-subServicio pl-[16px] lg:pl-[420px]">
                      <span className="text-sm-nunito-400 white">
                        CSS3/HTML5 Expertise
                      </span>
                    </div>
                  </div>

                  <div className="sc-rounded-right"></div>
                </div>

                {/* Digital Strategy */}
                <div className="border-b-[2px] border-[#ff3d00]">
                  <span className="text-md-lato-700 call-to-action">
                    Digital Strategy
                  </span>
                </div>

                <div className="sc-content-subSerivicio">
                  <div className="sc-rounded-left"></div>
                  <div className="sc-list-subservicio">
                    <div className="sc-subServicio pl-[0px] lg:pl-[404px]">
                      <span className="text-sm-nunito-400 white">
                        Real-Time Analytics
                      </span>
                    </div>
                    <div className="sc-subServicio pl-[0px] lg:pl-[404px]">
                      <span className="text-sm-nunito-400 white">
                        Community Engagement
                      </span>
                    </div>
                    <div className="sc-subServicio pl-[0px] lg:pl-[404px]">
                      <span className="text-sm-nunito-400 white">
                        Creative Storytelling
                      </span>
                    </div>
                  </div>
                </div>

                {/* Online Marketing */}
                <div className="border-b-[2px] border-[#ff3d00]">
                  <span className="text-md-lato-700 call-to-action">
                    Online Marketing
                  </span>
                </div>

                <div className="sc-content-subSerivicio">
                  <div className="sc-list-subservicio">
                    <div className="sc-subServicio pl-[16px] lg:pl-[420px]">
                      <span className="text-sm-nunito-400 white">
                        Targeted Google Ads
                      </span>
                    </div>
                    <div className="sc-subServicio pl-[16px] lg:pl-[420px]">
                      <span className="text-sm-nunito-400 white">
                        Comprehensive SEO
                      </span>
                    </div>
                    <div className="sc-subServicio pl-[16px] lg:pl-[420px]">
                      <span className="text-sm-nunito-400 white">
                        Digital Visibility
                      </span>
                    </div>
                  </div>
                  <div className="sc-rounded-right"></div>
                </div>

                {/* Mobile APPs */}
                <div className="border-b-[2px] border-[#ff3d00]">
                  <span className="text-md-lato-700 call-to-action">
                    Mobile APPs
                  </span>
                </div>

                <div className="sc-content-subSerivicio">

                  <div className="sc-rounded-left">

                  </div>

                  <div className="sc-list-subservicio">

                    <div className="sc-subServicio pl-[0px] lg:pl-[404px]">

                      <span className="text-sm-nunito-400 white">
                        Cross-Platform Development
                      </span>

                    </div>

                    <div className="sc-subServicio pl-[0px] lg:pl-[404px]">

                      <span className="text-sm-nunito-400 white">
                        User Engagement Focus
                      </span>

                    </div>
                    <div className="sc-subServicio pl-[0px] lg:pl-[404px]">
                      <span className="text-sm-nunito-400 white">
                        Integrated Web Applications
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sc-c5">

                <div className="sc-c5-f1 lg:h-[36px] sm:h-[37.5px] sm:border-b-[2px] sm:border-b-[#ff3d00] lg:border-b-[0px]">

                </div>

                <div className="sc-c5-f2">

                  <div className="sc-c5-f2-c1
                   lg:h-[163px]
                   sm:h-[161.5px]
                   lg:w-[78px]
                   
                   lg:border-[2px]
                   lg:border-[#ff3d00]
                   lg:border-l-0
                   lg:rounded-tr-[555px]
                   lg:rounded-br-[555px]
                   flex
                   flex-col
                   items-start
                   lg:pt-[63.5px]
                   sm:pt-[63px]
                   sm:border-b-[2px]
                   sm:border-b-[#ff3d00]
                  

                  ">
                    <div className="sc-c5-f2-c1-f1
                      h-[33px]
                      w-[16px]
                      border-[1px]
                      border-[white]
                      border-l-[0]
                      rounded-tr-[555px]
                      rounded-br-[555px]
                     
                    ">

                    </div>
                  </div>

                  <div className="sc-c5-f2-c2 sm:h-[160px] lg:h-[160.5px]">

                  </div>

                  <div className="sc-c5-f2-c3
                     lg:h-[163px]
                     sm:h-[163.5px]
                     lg:w-[78px];
                     lg:border-[2px]
                     lg:border-[#ff3d00]
                     lg:border-l-0
                     lg:rounded-tr-[555px]
                     lg:rounded-br-[555px]
                     flex
                     flex-col
                     items-start
                     lg:pt-[63.5px]
                     sm:pt-[63px]
                     sm:border-b-[2px]
                     sm:border-b-[#ff3d00]
                     sm:border-t-[2px]
                     sm:border-t-[#ff3d00]
                    
                    
                    
                    ">

                    <div className="sc-c5-f2-c3-f1
                         h-[32.5px]
                         w-[16px]
                         border-[1px]
                         border-[white]
                         border-l-[0]
                         rounded-tr-[555px]
                         rounded-br-[555px] 
                      ">

                    </div>
                  </div>

                  <div className="sc-c5-f2-c4 sm:h-[160px] lg:h-[160px]">

                  </div>

                  <div className="
                     lg:h-[163px]
                     sm:h-[163.5px]
                     lg:w-[78px];
                     lg:border-t-[2px]
                     lg:border-[#ff3d00]
                     flex
                     flex-col
                     items-start
                     lg:pt-[63.5px]
                     sm:pt-[63px]
                     sm:border-t-[2px]
                     sm:border-t-[#ff3d00]">

                    <div className="sc-c5-f2-c5-f1
                          h-[33px]
                          w-[16px]
                          border-[1px]
                          border-[white]
                          border-l-[0]
                          rounded-tr-[555px]
                          rounded-br-[555px] ">

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

