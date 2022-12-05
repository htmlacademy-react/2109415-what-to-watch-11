import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';
import UserBlock from '../../components/user-block/user-block';


function MyListScreen(): JSX.Element{
  return(
    <div className="user-page">
      <Helmet>
        <title>Your filmslist</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList/>

      </section>

      <footer className="page-footer">
        <Logo name={'logo__link--light'}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
