import './App.css'
import { Layout } from "./Components/Layout/Layout.tsx";
import { SocialLinks } from "./Components/SocialLinks/SocialLinks.tsx";
import AboutMe from "./Components/AboutMe/AboutMe.tsx";
import NavigationLinks from "./Components/NavigationLinks/NavigationLinks.tsx";
import WorkHistory from "./Components/WorkHistory/WorkHistory.tsx";
import Contact from "./Components/Contact/Contact.tsx";
import useMediaQuery from "./hooks/useMediaQuery.tsx";
function App() {
 const isMobile = useMediaQuery("(max-width: 991px)");
  return (
      <Layout>
          <div className="page">
              <aside className="sidebar">
                  <div className="sidebarTop">
                      <h1 className="name">Macie Grant</h1>
                      <div className="subtitleBlock">
                          <div className="title">Full Stack Engineer</div>
                          <div className="tagline">I build reliable and scalable systems.</div>
                      </div>
                  </div>

                  {isMobile === false && (
                      <NavigationLinks />
                  )}

                  {isMobile === false && (
                      <div className="sidebarBottom">
                          <SocialLinks />
                      </div>
                  )}
              </aside>

              <main className="content">
                  <AboutMe />
                  <WorkHistory />
                  <Contact />
                  {isMobile && (
                      <div className="sidebarBottom">
                          <SocialLinks/>
                      </div>
                  )}
              </main>
          </div>
      </Layout>
  )
}

export default App
