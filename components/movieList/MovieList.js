// "use client"

// import React, { useEffect, useState } from 'react'
// import "./MovieList.css"
// import Card from "../card/Card"

// const MovieList = () => {

//     const [movieList, setmovieList] = useState([])
//     // console.log(type);

//     const router = useRouter()
//     const {type} = router.query
  
//     useEffect(()=>{
//       getData()
//   },[])
  
//   useEffect(()=>{
//       getData()
//   },[type])
  
//   const getData = ()=>{
//       fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=35d7b5aac9089983775fb378b5750660&language=en-US`)
//       .then(res => res.json())
//       .then(data => setmovieList(data.results))
//   }
  
    
    
//   return (
//     <div className="movie_list">
//         <h2 className='list_title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
//         <div className="list_cards">
//             {
//                 movieList.map(movie => (
//                     <Card movie={movie} />
//                 ))
//             }
//         </div>
//     </div>
//   )
// }

// export default MovieList