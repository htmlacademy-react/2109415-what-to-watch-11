import { Helmet } from 'react-helmet-async';
import AddReview from '../../components/add-review/add-review';
import BackGround from '../../components/back-ground/back-ground';
import Logo from '../../components/logo/logo';
import PromoPoster from '../../components/promo-poster/promo-poster';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { getSelectedFilm } from '../../store/film-data/selectors';
import NotFoundPage from '../not-found-page/not-found-page';

function AddReviewScreen():JSX.Element{
  const film = useAppSelector(getSelectedFilm);

  if(!film) {return <NotFoundPage/>;}

  return(
    <section className="film-card film-card--full">
      <Helmet>
        <title>Add review...</title>
      </Helmet>

      <div className="film-card__header">
        <BackGround/>

        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                {/* <a className="breadcrumbs__link">Add review</a> */}
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>
        <PromoPoster
          name='film-card__poster--small'
        />

      </div>

      <AddReview />

    </section>
  );
}

export default AddReviewScreen;
