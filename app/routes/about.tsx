// routes/about.tsx
export default function About() {
    return (
        <main className="about" style={{ paddingTop: '80px' }}>
            <div className="container">
                <h1>Acerca de Mí</h1>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Soy Fernanda Alcaino, una estudiante del instituto profesional Duoc Uc con pasión por crear soluciones
                            tecnológicas que impacten positivamente en la vida de las personas.
                        </p>
                        <p>
                            Mi experiencia incluye trabajar con tecnologías como React, Node.js,
                            Python y bases de datos SQL y NoSQL. Me gusta mantenerme actualizada
                            con las últimas tendencias en desarrollo web y participar en proyectos
                            desafiantes.
                        </p>
                        <h2>Habilidades</h2>
                        <ul>
                            <li>Desarrollo Frontend (React, Vue, Angular)</li>
                            <li>Desarrollo Backend (Node.js, Python, Java)</li>
                            <li>Bases de datos (MySQL, MongoDB, PostgreSQL)</li>
                            <li>DevOps y Cloud (AWS, Docker, CI/CD)</li>
                        </ul>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Acerca de mí"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}