import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Remedie(){
    return(
        <Layout>
            <NavBar/>
            <div className="pt-28">
                Remedios
            </div>
            <Footer/>
        </Layout>
    )
}

export default Remedie