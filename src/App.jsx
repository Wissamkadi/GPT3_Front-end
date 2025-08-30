// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './Header';
import About from './About';
import Future from './Future';
import Blog from './Blog';
import Footer from './components/footer';
import Signup from "./Signup";
import Signin from "./Signin";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Reset from './Reset';

function App() {
  return (
    <GoogleOAuthProvider clientId="871509423731-01v4id2gj98a5pjafcb3pau0rl087c0j.apps.googleusercontent.com">
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Header />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="future">
                <Future />
              </section>

              <section id="blog">
                <Blog />
              </section>
                <Footer />
            </>
          }
        />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/reset" element={<Reset />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
