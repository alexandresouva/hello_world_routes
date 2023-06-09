import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Header from './components/Header';
import Footer from 'components/Footer';
import PageTemplate from 'components/PageTemplate';
import Post from 'components/Post';
import Error404 from 'components/Error404';
import ScrollToTop from 'components/scrollToTop';

function RoutesApp() {
  return (
    <BrowserRouter>
      <ScrollToTop />;
      <Header />
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route index element={<Home />} />
          <Route path="sobremim" element={<AboutMe />} />
        </Route>

        <Route path="post/:id/*" element={<Post />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
