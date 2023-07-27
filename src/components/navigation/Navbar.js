import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import logoo from 'assets/img/logoo.png'

function Navbar(){

    window.onscroll = function() {scrollFunction()}
    
    function scrollFunction(){
        if(document.getElementById('navbar')){
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    return(
        <nav id='navbar' className='w-full py-4 top-0 transition duration-300 ease-in-out z-40 fixed' >
            <div className="px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                <Link to='/' className="ml-4 mt-2">
                <img
                src={logoo}
                width={160}
                height={160} 
                className=""/>
                </Link>
                <div className="ml-4 mt-2 flex-shrink-0">
                <NavLink to='/remedios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-green-500 mx-4">Remedios</NavLink>
                <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-green-500 mx-4">Nosotros</NavLink>
                <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-green-500 mx-4">Contacto</NavLink>
                <button
                    type="button"
                    className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-2.5 text-l font-bold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                    Iniciar Sesión
                </button>
                </div>
            </div>
            </div>
        </nav>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar) 