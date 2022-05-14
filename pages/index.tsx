import {
    ActionIcon,
    Affix,
    Badge,
    Button,
    Col,
    Container,
    createStyles,
    Grid,
    Group,
    Image,
    List,
    Text,
    Title,
    Transition,
} from "@mantine/core";
import React from "react";
import {
    ArrowUpCircle,
    BrandGithub,
    BrandInstagram,
    BrandLinkedin,
    BrandNextjs,
    BrandPhp,
    BrandReactNative,
    CurrencyEthereum,
} from "tabler-icons-react";
import Nav from "../components/Nav";
import { IoLogoNodejs, IoLogoWordpress } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import { useWindowScroll } from "@mantine/hooks";
import RepoCard from "../components/RepoCard";

const useStyle = createStyles((theme) => ({
    badge: {
        ".mantine-Badge-leftSection": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    floatSocialLinkContainer: {
        position: "sticky",
        bottom: 0,
    },
    floatSocialLinks: {
        [theme.fn.smallerThan("lg")]: {
            display: "none",
        },
        "&::before": {
            content: `""`,
            position: "absolute",
            height: "100px",
            width: "2px",
            background: theme.colors.gray[7],
            transform: "translateX(-50%)",
            left: "50%",
            bottom: "-87%",
        },
        marginBottom: 65,
        position: "absolute",
        left: `calc((100vw - ${theme.breakpoints.md}px) / 2 - 80px)`,
        bottom: 50,
        svg: {
            width: 28,
            height: 28,
        },
    },
}));

const socialLinks: SocialLinks = [
    {
        name: "Linkedin",
        url: "",
        icon: <BrandLinkedin size={20} />,
    },
    {
        name: "GitHub",
        url: "",
        icon: <BrandGithub size={20} />,
    },
    {
        name: "Instagram",
        url: "",
        icon: <BrandInstagram size={20} />,
    },
];

const skills = [
    { name: "React Js", icon: BrandReactNative, color: "blue" },
    { name: "Next Js", icon: BrandNextjs, color: "dark" },
    { name: "Blockchain", icon: CurrencyEthereum, color: "violet" },
    { name: "Node Js", icon: IoLogoNodejs, color: "green" },
    { name: "PHP/Laravel", icon: BrandPhp, color: "cyan" },
    { name: "Wordpress", icon: IoLogoWordpress, color: "indigo" },
    { name: " TypeScript", icon: SiTypescript, color: "blue" },
];

const links: NavLinks = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
    { link: "/projects", label: "Project" },
];

const Home: React.FC = () => {
    const { classes } = useStyle();
    const [scroll, scrollTo] = useWindowScroll();
    return (
        <>
            <Nav links={links} socialLinks={socialLinks} />
            <Container my={64}>
                <Grid gutter={32}>
                    <Col xs={4}>
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width="100%"
                            radius="md"
                        />
                    </Col>
                    <Col xs={8}>
                        <Title mb="md">Hi there! 👋</Title>
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
                </Grid>
            </Container>
            <Container my={64}>
                <Title mb="md">About Me</Title>
                <Grid gutter={32}>
                    <Col xs={8}>
                        <Text mb="md">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Mollitia quaerat, vel deserunt placeat
                            accusamus aut quod, cum adipisci possimus ut
                            incidunt sequi ullam qui consectetur porro. Sit,
                            quidem! Voluptatibus dicta perferendis tempore,
                            vitae, accusamus perspiciatis consequatur quibusdam,
                            temporibus illum fuga asperiores! Sunt, iste ratione
                            eum incidunt tempore quidem perspiciatis aliquam!
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Mollitia quaerat, vel deserunt placeat
                            accusamus aut quod, cum adipisci possimus ut
                            incidunt sequi ullam qui consectetur porro. Sit,
                            quidem! Voluptatibus dicta perferendis tempore,
                            vitae, accusamus perspiciatis consequatur
                        </Text>
                    </Col>

                    <Col xs={4}>
                        <Image radius="md" src="/me1x1.jpeg" alt="My Image" />
                    </Col>
                </Grid>
            </Container>
            <Container my={64}>
                <Title mb="md">My Career So Far</Title>

                <Grid gutter="md">
                    <Col xs={6}>
                        <Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Possimus at nesciunt accusamus maxime
                            repellendus consectetur facilis dignissimos sunt
                            vel. Amet excepturi dolores praesentium, molestiae
                            placeat et modi aspernatur rem maiores voluptate
                            nulla. Quam animi doloremque dolorum eum? Ullam
                            laborum non corrupti, ipsa accusantium ad enim,
                            perspiciatis et magnam esse quae.
                        </Text>
                    </Col>
                    <Col xs={6}>
                        <Group spacing="md">
                            {skills.map((skill) => (
                                <Badge
                                    key={Math.random()}
                                    className={classes.badge}
                                    size="xl"
                                    variant="outline"
                                    color={skill.color}
                                    leftSection={<skill.icon size={18} />}
                                >
                                    {skill.name}
                                </Badge>
                            ))}
                        </Group>
                    </Col>
                </Grid>
            </Container>
            <Container my={64}>
                <Title mb="md">Projects</Title>
                <Grid gutter="md">
                    <Col xs={6}>
                        <RepoCard />
                    </Col>
                    <Col xs={6}>
                        <RepoCard />
                    </Col>
                    <Col xs={6}>
                        <RepoCard />
                    </Col>
                    <Col xs={6}>
                        <RepoCard />
                    </Col>
                </Grid>
            </Container>
            <Container my={64}>
                <ContactUs socialLinks={socialLinks} />
            </Container>
            <Container
                className={classes.floatSocialLinkContainer}
                p="md"
                fluid
            >
                <Group direction="column" className={classes.floatSocialLinks}>
                    {socialLinks.map((socialLink) => (
                        <ActionIcon key={Math.random()} size="lg">
                            {socialLink.icon}
                        </ActionIcon>
                    ))}
                </Group>
            </Container>
            <Footer links={links} socialLinks={socialLinks} />
            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <ActionIcon
                            size="lg"
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <ArrowUpCircle size={28} />
                        </ActionIcon>
                    )}
                </Transition>
            </Affix>
        </>
    );
};

export default Home;
