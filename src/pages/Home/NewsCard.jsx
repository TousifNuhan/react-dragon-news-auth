import { Link } from "react-router-dom";



const NewsCard = ({ news }) => {
    const {author,title,image_url,details,_id } = news
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image_url}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-red-700">{author.name}</h2>
                    <p>{title}</p>
                    {
                        details.length>100 ?
                       <p>{details.slice(0,100)}<Link className="text-blue-600" to={`/news/${_id}`}> Read More...</Link></p> :
                       <p>{details}</p>
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default NewsCard;