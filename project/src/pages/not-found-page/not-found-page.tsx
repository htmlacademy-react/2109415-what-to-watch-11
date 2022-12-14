import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element{
  return(
    <section>
      <Helmet>
        <title>404. Page not found</title>
      </Helmet>
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundPage;
