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
                            Mi experiencia incluye trabajar con java, python y estoy aprendiendo HTML.
                            Me gusta mantenerme actualizada con el desarrollo de la tecnologia y participar en proyectos desafiantes.
                        </p>
                        <h2>Habilidades</h2>
                        <ul>
                            <li>Desarrollo Frontend (HTML,React)</li>
                            <li>Desarrollo Backend (Python y Java)</li>
                            <li>Bases de datos (SQL y PL/SQL)</li>

                        </ul>
                    </div>

                </div>
            </div>
        </main>
    );
}