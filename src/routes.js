import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Header from './components/Header';
import Footer from 'components/Footer';
import PageTemplate from 'components/PageTemplate';
import Post from 'components/Post';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route index element={<Home />} />
          <Route path="sobremim" element={<AboutMe />} />
          <Route path="post/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<div>404: Page not found.</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
