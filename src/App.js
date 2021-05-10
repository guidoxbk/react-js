
import './App.css';
var items=[
    'uno' ,
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'seis',
    'siete',
    'ocho',
    ]
let logo =''

function App() {
  return (
    <>
        <div className="app-header">
        <div id="encabezado">

                    <div className="nav-logo">
                        <img src="img/Sin título.png"/>
                    </div>  

                    <div className="barra">
                <input className="searchbar" type="search" placeholder="Qué producto buscás?"/>
            </div>
                    
                    <div>
                <a href="#"><img className="logo-carrito" src="img/shopping_cart_white_48dp.svg" alt="Carrito"/></a>
            </div>
        </div>
        </div>
        
        
            
        <div id="artic">
            <div><h2>accesorios</h2></div>
            <div><h2>hogar y deco</h2></div>
            <div><h2>tecnologia</h2></div>
            <div><h2>promociones del mes</h2></div>
        </div>
        <div id="banner"> 
            
            <button><h3 className="Conoce-mas">conoce mas</h3></button>
           
        </div>

            <div className="beneficios">
                <div className="conteiner-beneficios">
                    <a href="delivery"><img src="img/delivery.svg" alt="delivery"/></a>
                    <div className="aside-box">
                    <h3>Envíos a todo el país</h3>
                    <p>Comprá desde la comodidad de tu casa</p>
                    </div>
                </div>
                
                <div className="conteiner-tarj-benef">
            <a href="#compra-segura"><img src="img/shield.svg" alt="compra segura"/></a>
            <div className="aside-box">
                <h3>Seguridad</h3>
                <p>Compras protegidas por Mercado Pago</p>
            </div>
        </div>


            </div> 

            
            <div className="item">
            {

                items.map( function () {
                    return <div className="item-product"> 
                   <img src="/img/vinilos-deco1.jpg" alt="logo"/>
                    <p><b className=" link-compra">comprar</b></p> 
                     </div> 

                })
        
          }</div>

        <div className="ver-mas">
                Ver Mas
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        
<div className="footer">
<p>
                Direccion 444,piso 5. CABA
            </p>
            <p> 
                tienda@dominio.com.ar
            </p>
            <p>
                +54 9 299-5643132
            </p>

</div>

        

    </>
  );
}

export default App;
