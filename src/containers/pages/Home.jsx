import BlogList from "components/home/BlogList"
import CTA from "components/home/CTA"
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import Remedies from "components/home/Remedies"
import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Home(){
    return(
        <Layout>
            <NavBar/>
            <div className="pt-28">
                <Header/>
                <Incentives/>
                <Remedies/>
                <CTA/>
                <BlogList/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home