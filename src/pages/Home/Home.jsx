import '../pages.css';

function Home() {
  return (
    <div>
      <div className='home-container'>
        {/* Contenido encima del video */}
        <div className="content" style={{ color: 'white', textAlign: 'center' }}>
          <h1>Bienvenid@ a mi presentación</h1>
          <p>Explora la aplicación con estilo</p>
        </div>
        {/* Tarjetas */}
      </div>
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-sm-4 col-md-3 col-lg-2">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Nombre</h5>
                <p className="card-text mt-2 mb-1">
                  <strong>Precio</strong><br />
                </p>
                <p className="card-text mb-3">
                  <strong>Stock</strong><br />
                </p>
                <button onClick={() => setReporte(`Reporte del producto ${p.IdProducto}\nNombre: ${p.Nombre}\nPrecio: ${formatoPEN(p.Precio)}\nStock: ${p.Stock}`)}
                  className="btn btn-primary mt-auto">
                  Reporte
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
