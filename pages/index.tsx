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
import logo from "../public/logo.png";
import me from "../public/me1x1.jpeg";
import Image from "next/image";

const AnimationDelay = 1000;

const useStyle = createStyles((theme) => ({
    image: {
        borderRadius: theme.radius.md,
    },
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
        id: Math.random(),
        name: "Linkedin",
        url: "",
        icon: <BrandLinkedin size={20} />,
    },
    {
        id: Math.random(),
        name: "GitHub",
        url: "",
        icon: <BrandGithub size={20} />,
    },
    {
        id: Math.random(),
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
    { id: Math.random(), link: "/", label: "Home" },
    { id: Math.random(), link: "/about", label: "About" },
    { id: Math.random(), link: "/projects", label: "Project" },
];

const Home: React.FC = () => {
    const { classes } = useStyle();
    const [scroll, scrollTo] = useWindowScroll();
    return (
        <>
            <Nav
                links={links}
                socialLinks={socialLinks}
                className="_pangolin__section__header"
            />
            <Container py={64} className="_pangolin__section__intro">
                <Grid gutter={32}>
                    <Col
                        xs={4}
                        data-aos="fade-up"
                        data-aos-delay={AnimationDelay}
                        data-aos-duration="1000"
                    >
                        <Image
                            priority
                            className={classes.image}
                            src={logo}
                            alt="logo"
                        />
                    </Col>
                    <Col xs={8}>
                        <Title
                            mb="md"
                            data-aos="fade-up"
                            data-aos-delay={AnimationDelay + 100}
                            data-aos-duration="1000"
                            style={{ fontSize: "clamp(40px, 8vw, 80px)" }}
                        >
                            Hi there! 👋
                        </Title>
                        <Text
                            mb="md"
                            size="xl"
                            data-aos="fade-up"
                            data-aos-delay={AnimationDelay + 200}
                            data-aos-duration="1000"
                        >
                            Hi, I am Soumen Khara a passionate self-taught full
                            stack web developer and a freelancer from India. I
                            have a passion for web design and love to create
                            things for web and mobile devices.
                        </Text>
                        <Group
                            spacing="md"
                            data-aos="fade-up"
                            data-aos-delay={AnimationDelay + 300}
                            data-aos-duration="1000"
                        >
                            <Button variant="outline">About</Button>
                            <Button>Contact Me</Button>
                        </Group>
                    </Col>
                </Grid>
            </Container>
            <Container
                my={64}
                className="_pangolin__section__about"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
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
                        <Image
                            priority
                            className={classes.image}
                            src={me}
                            alt="My Image"
                        />
                    </Col>
                </Grid>
            </Container>
            <Container
                my={64}
                className="_pangolin__section__career"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
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
            <Container
                my={64}
                className="_pangolin__section__projects"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
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
            <Container
                my={64}
                className="_pangolin__section__contact"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <ContactUs socialLinks={socialLinks} />
            </Container>
            <Container
                className={
                    classes.floatSocialLinkContainer +
                    " _pangolin__section__social_links"
                }
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
            <Footer
                links={links}
                socialLinks={socialLinks}
                className="_pangolin__section__footer"
            />
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
