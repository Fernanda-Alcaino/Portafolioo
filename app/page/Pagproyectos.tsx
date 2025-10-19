import React from 'react';
import { Row, Col, Card, Typography, List, Tag } from 'antd';

const { Title, Paragraph } = Typography;

const PaginaProyectos: React.FC = () => {
    const proyectos = [
        {
            nombre: 'E-commerce Platform',
            descripcion: 'Plataforma de comercio electrónico desarrollada con React, Node.js y MongoDB.',
            tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            año: '2023'
        },
        {
            nombre: 'Task Management App',
            descripcion: 'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real.',
            tecnologias: ['React', 'Firebase', 'Material-UI'],
            año: '2022'
        },
        {
            nombre: 'Weather Dashboard',
            descripcion: 'Dashboard meteorológico con visualización de datos en tiempo real.',
            tecnologias: ['Vue.js', 'API Integration', 'Chart.js'],
            año: '2021'
        }
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
                            borderRadius: '15px'
                        }}
                    >
                        <Title level={1} style={{ textAlign: 'center', color: '#7c3aed', marginBottom: '40px' }}>
                            Mis Proyectos
                        </Title>

                        <List
                            itemLayout="vertical"
                            dataSource={proyectos}
                            renderItem={(proyecto, index) => (
                                <List.Item>
                                    <Card
                                        style={{ marginBottom: '20px', border: '1px solid #f0f0f0' }}
                                        bodyStyle={{ padding: '20px' }}
                                    >
                                        <Title level={3} style={{ color: '#7c3aed', marginBottom: '10px' }}>
                                            {proyecto.nombre}
                                        </Title>
                                        <Paragraph style={{ color: '#666', fontSize: '16px', marginBottom: '15px' }}>
                                            {proyecto.descripcion}
                                        </Paragraph>
                                        <div style={{ marginBottom: '10px' }}>
                                            <strong>Tecnologías: </strong>
                                            {proyecto.tecnologias.map((tech, idx) => (
                                                <Tag key={idx} color="purple" style={{ margin: '2px' }}>
                                                    {tech}
                                                </Tag>
                                            ))}
                                        </div>
                                        <Tag color="blue">{proyecto.año}</Tag>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PaginaProyectos;