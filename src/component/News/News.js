import React from "react";

const CardView = (item) => {
  return (
    <div className="carder">
      <div>
        <img src={item.urlToImage} className="imageview" />
        <center>
          <h5 className="dataof">
            {item.publishedAt.split("T")[1].split("Z")}
          </h5>
        </center>
      </div>
      <div className="content">
        <h5 className="title">{item.title}</h5>
        <div className="source">
          <h6 className="srcname">
            <span>{item.source.name}</span>
          </h6>
        </div>
        <div className="hrs"></div>
        <p className="describe">{item.description}</p>
        <a className="morebutton" target="_blank" href={item.url}>
          View More &#10132;
        </a>
      </div>
    </div>
  );
};

const News = () => {
  const [data, setData] = React.useState([]);

  const Datacase = () => {
    const URL =
      "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=186c441ac4cb417a828496162b4d78a8";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.articles);
        console.log(data.articles);
      });
  };

  React.useEffect(() => {
    Datacase();
  }, []);

  return (
    <div className="news" id="tonews">
      <center>
        <h2>Stock Market News</h2>
      </center>
      <center>
        <div className="hr"></div>
      </center>
      <div className="newscont">
        {data.map((item) => {
          return CardView(item);
        })}
      </div>
    </div>
  );
};

export default News;
