import Header from "components/about/Header"
import Team from "components/about/Team"
import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function About(){
    return(
        <Layout>
            <NavBar/>
            <div className="pt-28">
                <Header/>
                <Team/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default About