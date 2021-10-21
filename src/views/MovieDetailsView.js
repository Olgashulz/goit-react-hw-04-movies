import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PageHeading from '../components/PageHeading/PageHeading';
import * as api from '../services/api';

export default function MovieDetailsView() {
  const { moveId } = useParams();
  console.log(moveId);
  const [MovieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    api.fetchMovieDetails(moveId).then(setMovieDetails);
  }, [moveId]);

  return (
    <>
      <PageHeading text={`id ${moveId}`}></PageHeading>
      {MovieDetails && (
        <>
          <img
            className="modal-card "
            src={`https://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`}
            alt={MovieDetails.title}
          />
          <div className="wrapper">
            <h2 id="video-title-dt" className="modal-card__title">
              {MovieDetails.title}
            </h2>
            <ul className="modal-card__list">
              <li className="modal-card__item">
                <span className="item"> Votes </span>
                <span className="item-value">{MovieDetails.vote_average}</span>
              </li>
              <li className="modal-card__item">
                <span className="item"> Popularity </span>

                <span className="item-value">{MovieDetails.popularity}</span>
              </li>
              <li className="modal-card__item">
                <span className="item"> Original title </span>

                <span className="item-value">
                  {MovieDetails.original_title}
                </span>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

//     <>
//         <h2>{MovieDetails.original_title}</h2>
//         <img
//             className='modal-card '
//             // src=`https://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`
//             alt={MovieDetails.title}
//         />

//         <div className='wrapper'>
//             <h2 id='video-title-dt' className='modal-card__title'>{MovieDetails.title}</h2>
//             <div className='modal-card__stats-wrapper'>
//                 <div className='modal-card__stats-wrapper1'>
//                     <ul className='modal-card__list'>
//                         <li className='modal-card__item'>Vote / Votes</li>
//                         <li className='modal-card__item'>Popularity</li>
//                         <li className='modal-card__item'>Original title</li>
//                     </ul>
//                 </div>
//                 <div className='modal-card__stats-wrapper2'>
//                     <ul className='modal-card__list'>
//                         <li id='video-title-dt' className='modal-card__data'>
//                             <span className='modal-card__data--vote'>{MovieDetails.vote_average}</span><span
//                                 className='modal-card__item'
//                             > / </span><span
//                                 className='modal-card__data--vote modal-card__data--vote-count'
//                             >{MovieDetails.vote_count}</span>
//                         </li>
//                         <li id='video-title-dt' className='modal-card__data'>{MovieDetails.popularity}</li>
//                         <li
//                             id='video-title-dt'
//                             className='modal-card__data modal-card__data-title'
//                         >{MovieDetails.original_title}</li>
//                     </ul>
//                 </div>
//             </div>

//             )

// }
