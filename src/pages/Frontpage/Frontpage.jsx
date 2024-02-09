
import { useFetch } from "../../hooks/useFetch";
import style from "./frontpage.module.scss";
const Frontpage = () => {
  const { data: news, loading, error } = useFetch('http://localhost:4000/news');
  
 
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
        <figure key={item.id} className={style.newsItem}>
          <figcaption>
          <img src={`../../../src/assets/images/${item.image.filename}`}/>
          
          <h5>{item.title}</h5>
          </figcaption>
          <p className={style.hoverElement}>{item.teaser}</p>
          </figure>
        
      ))}
  
  
      
      
    </div>
    </>
    
  );

 
};

export default Frontpage; 
