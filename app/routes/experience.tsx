// routes/experience.tsx
export default function Experience() {
    const experiences = [
        {
            id: 1,
            title: 'Desarrollador Frontend',
            company: 'Empresa A',
            period: '2020-2022',
            description: 'Descripción de las responsabilidades y logros en la Empresa A'
        },
        {
            id: 2,
            title: 'Desarrollador Full Stack',
            company: 'Empresa B',
            period: '2018-2020',
            description: 'Descripción de las responsabilidades y logros en la Empresa B'
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