import { Col, Container, Grid, Image, List, Text, Title } from "@mantine/core";
import React from "react";
import Nav from "../components/Nav";

const Home: React.FC = () => {
    return (
        <>
            <Nav />
            <Container>
                <Grid gutter="md">
                    <Col xs={8}>
                        <Title mb="md" order={1}>
                            Hi there! 👋
                        </Title>
                        <Text mb="md" size="lg">
                            Hi, I am Soumen Khara a passionate self-taught full
                            stack web developer and a freelancer from India. I
                            have a passion for web design and love to create
                            things for web and mobile devices.
                        </Text>
                        <List size="lg">
                            <List.Item>
                                🌱 I’m currently learning Blockchain
                            </List.Item>
                            <List.Item>
                                👨‍💻 All of my projects are available at
                                https://github.com/50UM3N
                            </List.Item>
                            <List.Item>💬 Ask me about Java Script</List.Item>
                            <List.Item>
                                📫 How to reach me soumen2015.s.k@gmail.com
                            </List.Item>
                        </List>
                    </Col>
                    <Col xs={4}>
                        <Image src="/logo.png" alt="logo" width="100%" />
                    </Col>
                </Grid>
            </Container>
        </>
    );
};

export default Home;
