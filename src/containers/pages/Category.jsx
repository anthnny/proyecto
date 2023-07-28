import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { Helmet } from 'react-helmet-async'
import { useEffect } from "react"
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list_category , get_blog_list_category_page } from "redux/actions/remedies/remedies"
import CategoriesHeader from "components/blog/CategoriesHeader"
import { useParams } from "react-router-dom"


function Category({
    get_categories,
    get_blog_list_category,
    get_blog_list_category_page,
    categories,
    count,
    next,
    previous
}){

    const params = useParams()
    const slug = params.slug

    useEffect(()=>{
        window.scrollTo(0,0)
        get_categories()
        get_blog_list_category(slug)
    },[])


    return(
        <Layout>
            <Helmet>
                <title>HerbaCare | Categoria: {slug}</title>
                <meta name="description" content="Plantas Medicinales, Recetas Medicinales todo aqui en nuestra pagina HerbaCare"/>
                <meta name="keywords" content="plantas medicinales, hierbas medicinales, remedios caseros" />
                <meta name="author" content="HerbaCare" />
            </Helmet>
            <NavBar/>
            <div className="pt-24">
                <CategoriesHeader categories={categories&&categories}/>
            </div>
            <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
    categories: state.categories.categories,
    posts: state.remedies.blog_list_category,
    count: state.remedies.count,
    next: state.remedies.next,
    previous: state.remedies.previous,
})


export default connect(mapStateToProps,{
    get_categories,
    get_blog_list_category,
    get_blog_list_category_page
}) (Category)