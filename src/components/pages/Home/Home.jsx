import './Home.css'
export function Home(){

    return(
        <>

            <section className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <h1>JUAN JOSE GALLEGO MESA</h1>
                        <img src="../../../../src/assets/img/profe.jpeg" alt="" className="img-fluid rounded shadow foto"/>
                        <hr />
                        <p>
                            Soy un apasionado de la innovación, la programación y la creación de soluciones centradas en las personas.
                            Trabajo en el cruce entre el design thinking, la investigación de mercados y el desarrollo ágil de servicios, siempre con un enfoque práctico y basado en datos.

                            Me especializo en construir perfiles de usuario y arquetipos utilizando metodologías como Jobs to be Done, y desarrollo aplicaciones y servicios digitales principalmente con Python (FastAPI) y análisis de datos con Pandas.
                            Disfruto transformar insights en productos funcionales, validando ideas rápido y aprendiendo continuamente.

                            Más allá del trabajo, la programación es también una de mis pasiones personales.
                            En mi tiempo libre, encuentro inspiración y energía en la música rock, siempre acompañado de guitarras distorsionadas y grandes riffs que impulsan mi creatividad.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )

}