// routes/experience.tsx
export default function Experience() {
    const experiences = [
        {
            id: 1,
            title: 'Certificacion',
            period: '2024',
            description: 'Certificacion de Python'
        },
        {
            id: 2,
            title: 'Desarrollador Full Stack',
            company: 'Proyectos de Instituto',
            period: '2024',
            description: 'Desarrollo de proyectos de clase de fullstack'
        }
    ];

    return (
        <main className="experience" style={{ paddingTop: '80px' }}>
            <div className="container">
                <h1>Mi Experiencia</h1>
                <div className="experience-list">
                    {experiences.map(exp => (
                        <div key={exp.id} className="experience-item">
                            <h3>{exp.title}</h3>
                            <h4>{exp.company} | {exp.period}</h4>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}