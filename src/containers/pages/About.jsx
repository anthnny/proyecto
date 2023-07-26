import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function About(){
    return(
        <Layout>
            <NavBar/>
            <div className="pt-28">
                Nosotros
            </div>
            <Footer/>
        </Layout>
    )
}

export default About