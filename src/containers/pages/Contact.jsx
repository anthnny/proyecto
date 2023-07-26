import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Contact(){
    return(
        <Layout>
            <NavBar/>
            <div className="pt-28">
                Contacto
            </div>
            <Footer/>
        </Layout>
    )
}

export default Contact