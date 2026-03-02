import { Layout } from "./Components/Layout/Layout.tsx";
import AboutMe from "./Components/AboutMe/AboutMe.tsx";
import NavigationLinks from "./Components/NavigationLinks/NavigationLinks.tsx";
import WorkHistory from "./Components/WorkHistory/WorkHistory.tsx";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact/index.tsx";
import useMediaQuery from "./hooks/useMediaQuery.tsx";
import './App.css'

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
              </aside>

              <main className="content">
                  <AboutMe />
                  <WorkHistory />
                  <hr style={{ width: "100%", borderColor: "#1E293B" }}/>
                  <Projects />
                  <Contact />
              </main>
          </div>
      </Layout>
  )
}

export default App
