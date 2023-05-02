import Banner from 'components/Banner';
import { Outlet } from 'react-router-dom';

const PageTemplate = () => {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
};

export default PageTemplate;
