import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { Helmet } from 'react-helmet-async'

function Contact(){
    return(
        <Layout>
            <Helmet>
                <title>HerbaCare | Contacto</title>
                <meta name="description" content="Plantas Medicinales, Recetas Medicinales todo aqui en nuestra pagina HerbaCare"/>
                <meta name="keywords" content="plantas medicinales, hierbas medicinales, remedios caseros" />
                <meta name="author" content="HerbaCare" />
            </Helmet>
            <NavBar/>
            <div className="pt-28">
                Contacto
            </div>
            <Footer/>
        </Layout>
    )
}

export default Contact