import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import style from "./frontpage.module.scss";
const Frontpage = () => {
  const { data: news, loading, error } = useFetch('http://localhost:4000/news');
  const recommendations = useFetch('http://localhost:4000/destinations/danmark/aalborg/overlook-aalborg-city/standard');
  const [hoverDetails, setHoverDetails] = useState(false);

  console.log(recommendations);  
  
 
  if (loading) {    
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
 

  const slicedNews = news.slice(0, 3);

  return (
   <><h1>Sidste Nyt</h1>
    <div className={style.newsStyling}>
      
      {slicedNews.map((item) => (
        <figure key={item.id}>
          <figcaption>
          <img src={`../../../src/assets/images/${item.image.filename}`}/>
          {item.title}
          <p>{item.teaser}</p>
          </figcaption>
          </figure>
        
      ))}

      
        {/* <h1>Se vores udvalg af værelser</h1>
        <section>
        {recommendations.map((item)=>(
          <figure key={item.id}>
          <figurecaption>
        
          </figurecaption>
          </figure>
          
        ))}
         </section>
      */}
      
    </div>
    </>
    
  );

 
};

export default Frontpage;
