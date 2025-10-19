import React from 'react';
import { Row, Col, Card, Typography, List } from 'antd';

const { Title, Paragraph } = Typography;

const PaginaExperiencia: React.FC = () => {
    const experiencias = [
        {
            titulo: 'Desarrollador Frontend',
            empresa: 'Empresa A',
            periodo: '2020-2022',
            descripcion: 'Desarrollo de aplicaciones web con React y TypeScript. Implementación de interfaces de usuario responsivas y optimización de rendimiento.'
        },
        {
            titulo: 'Desarrollador Full Stack',
            empresa: 'Empresa B',
            periodo: '2018-2020',
            descripcion: 'Desarrollo de aplicaciones completas con React, Node.js y MongoDB. Liderazgo de equipo y arquitectura de software.'
        }
    ];

    return (
        <div style={{
            paddingTop: '80px', // Mantener este padding
            minHeight: '100vh',
            backgroundColor: '#8b5cf6',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
        }}>
            {/* ELIMINADO: <Header /> */}
            <Row justify="center" style={{ padding: '40px 20px' }}>
                <Col xs={24} lg={18}>
                    <Card
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: '15px',
                            minHeight: '400px'
                        }}
                    >
                        <Title level={1} style={{ textAlign: 'center', color: '#7c3aed', marginBottom: '40px' }}>
                            Mi Experiencia
                        </Title>

                        <List
                            itemLayout="vertical"
                            dataSource={experiencias}
                            renderItem={(experiencia, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={
                                            <div>
                                                <Title level={3} style={{ margin: 0, color: '#7c3aed' }}>
                                                    {experiencia.titulo}
                                                </Title>
                                                <Paragraph style={{ margin: '5px 0', fontWeight: 'bold', color: '#666' }}>
                                                    {experiencia.empresa} | {experiencia.periodo}
                                                </Paragraph>
                                            </div>
                                        }
                                        description={
                                            <Paragraph style={{ color: '#666', fontSize: '16px' }}>
                                                {experiencia.descripcion}
                                            </Paragraph>
                                        }
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PaginaExperiencia;