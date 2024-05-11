import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Details(){
    const [loading, setLoading] = useState(true);
    const [selectedMovie, setMovie] = useState();
    const {id} = useParams();
    
    const getMovie = async () =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
   ).json();
   setLoading(false);
   setMovie(json.data.movie);
    };
    useEffect(()=>{
        getMovie();
    },[]);
    console.log(selectedMovie);
    return <div>
        <img src={selectedMovie.medium_cover_image} alt={selectedMovie.id}/>
        <h1>{selectedMovie.title}</h1>
        <hr />
        <p>Rating :{selectedMovie.rating}</p>
    </div>;
}

export default Details;