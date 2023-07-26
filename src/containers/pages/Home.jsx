import Header from "components/home/Header"
import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Home(){
    return(
        <Layout>
            <NavBar/>
            <div className="pt-28">
                <Header/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home