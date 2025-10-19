import React from 'react';
import { Row, Col, Card, Typography, List, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const PaginaAcercaDe: React.FC = () => {
    const habilidades = [
        'Desarrollo Frontend (React, Vue, Angular)',
        'Desarrollo Backend (Node.js, Python, Java)',
        'Bases de datos (MySQL, MongoDB, PostgreSQL)',
        'DevOps y Cloud (AWS, Docker, CI/CD)',
        'Metodologías Ágiles (Scrum, Kanban)',
        'Control de versiones (Git, GitHub, GitLab)'
    ];

    return (
        <div style={{
            paddingTop: '80px',
            minHeight: '100vh',
            backgroundColor: '#8b5cf6',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
        }}>
            <Row justify="center" style={{ padding: '40px 20px' }}>
                <Col xs={24} lg={18}>
                    <Card
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: '15px',
                            padding: '30px'
                        }}
                    >
                        <Title level={1} style={{ textAlign: 'center', color: '#7c3aed', marginBottom: '30px' }}>
                            Acerca de Mí
                        </Title>

                        <Row gutter={[30, 30]}>
                            <Col xs={24} lg={12}>
                                <Paragraph style={{ fontSize: '16px', lineHeight: '1.7', color: '#666' }}>
                                    Soy Fernanda Alcaino, una estudiante del instituto profesional Duoc Uc con pasión por crear soluciones tecnológicas.
                                </Paragraph>
                                <Paragraph style={{ fontSize: '16px', lineHeight: '1.7', color: '#666' }}>
                                    Mi experiencia incluye trabajar con java, python y estoy aprendiendo HTML. Me gusta mantenerme actualizada con el desarrollo de la tecnologia y participar en proyectos desafiantes.
                                </Paragraph>
                            </Col>
                            <Col xs={24} lg={12}>

                            </Col>
                        </Row>

                        <Divider />

                        <Title level={2} style={{ color: '#7c3aed', marginBottom: '20px' }}>
                            Habilidades
                        </Title>

                        <List
                            grid={{ gutter: 16, column: 2 }}
                            dataSource={habilidades}
                            renderItem={(habilidad, index) => (
                                <List.Item>
                                    <div style={{
                                        padding: '10px',
                                        backgroundColor: '#f9f0ff',
                                        borderRadius: '6px',
                                        border: '1px solid #d3adf7'
                                    }}>
                                        {habilidad}
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PaginaAcercaDe;