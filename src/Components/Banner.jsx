import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://fullsync.co.uk/wp-content/uploads/2023/02/Video-Game-Characters.jpg"
            className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-96"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://www.thefactsite.com/wp-content/uploads/2021/11/100-video-game-facts-728x364.jpg"
            className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-96"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://t4.ftcdn.net/jpg/05/04/10/63/360_F_504106337_KQuS3MgfbcySpEXafZYSNKmkkqRVDGvc.jpg"
            className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-96"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://media.wired.com/photos/62855b1bb6cfd378a30c474a/3:2/w_2560%2Cc_limit/Build-Game-Watch-It-Die-Hyper-Scape-Games.jpg"
            className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-96"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
