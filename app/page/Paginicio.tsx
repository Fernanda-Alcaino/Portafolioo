import React from 'react';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const PaginaInicio: React.FC = () => {
    return (
        <div style={{
            paddingTop: '80px', // Mantener este padding para el header fijo
            minHeight: '100vh',
            backgroundColor: '#8b5cf6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* ELIMINADO: <Header /> */}
            <Row justify="center" style={{ width: '100%', padding: '20px' }}>
                <Col xs={24} sm={20} md={16} lg={12} xl={10}>
                    <Card
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: '20px',
                            padding: '40px 30px',
                            textAlign: 'center',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            border: 'none'
                        }}
                    >
                        <Title level={1} style={{ margin: 0, color: '#7c3aed', fontSize: '2.5rem' }}>
                            ¡Bienvenido a mi Portafolio!
                        </Title>

                        <Paragraph style={{
                            fontSize: '18px',
                            lineHeight: '1.7',
                            color: '#666',
                            margin: '20px 0'
                        }}>
                            Soy Fernanda Alcaino, una estudiante del instituto profesional Duoc Uc
                        </Paragraph>
                        <Paragraph style={{
                            fontSize: '16px',
                            lineHeight: '1.6',
                            color: '#666'
                        }}>
                            En este portafolio encontrarás algunos de mis proyectos, mi experiencia como estudiante y más información sobre mí.
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PaginaInicio;