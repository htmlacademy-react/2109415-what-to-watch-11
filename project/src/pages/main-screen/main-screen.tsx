import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import { MovieCard } from '../../types/moviescards';
import { useAppSelector } from '../../hooks';
import { filterFilms } from '../../utils/utils';
import PageHeader from '../../components/page-header/page-header';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';

type MainScreenProps = {
  filmTop: MovieCard;
  films:MovieCard[];
}

function MainScreen( {filmTop, films}:MainScreenProps) :JSX.Element {
<<<<<<< HEAD
  const newGenre = useAppSelector((state) => state.genre);
  const filteredFilms = filterFilms(films, newGenre);

=======
  newGenre = useAppSelector((state) => state.genre);
  let filteredFilms = films;
  if (newGenre !== FILMGENREBYDEFAULT) {
    filteredFilms = films.filter((film)=>film.genre.includes(newGenre));}
>>>>>>> 68ba663 (something)

  return (
    <>
      <section className="film-card">
        <Helmet>
          <title>What To Watch</title>
        </Helmet>
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW:</h1>

        <PageHeader/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              {/* <h2 className="film-card__title">{props.nameOfFilm}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.ganre}</span>
                <span className="film-card__year">{props.releaseDate}</span>
              </p> */}

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    {/* <use xlink:href="#play-s"></use> */}
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    {/* <use xlink:href="#add"></use> */}
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            films={films}
          />

          <div className="catalog__films-list">
            <FilmsList
              films={filteredFilms}
            />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <Logo name={'logo__link--light'}/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default MainScreen;
