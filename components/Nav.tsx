import {
    ActionIcon,
    Burger,
    Container,
    createStyles,
    Group,
    Header,
    Paper,
    Stack,
    Title,
} from "@mantine/core";
import { link } from "fs";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const useStyles = createStyles((theme) => ({
    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 56,

        [theme.fn.smallerThan("sm")]: {
            justifyContent: "flex-start",
        },
    },

    links: {
        width: 260,

        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    social: {
        width: 260,

        [theme.fn.smallerThan("sm")]: {
            display: "none",
            width: "auto",
            marginLeft: "auto",
        },
    },

    burger: {
        marginLeft: "auto",

        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][
                theme.colorScheme === "dark" ? 3 : 7
            ],
        },
    },
    header: {
        position: "relative",
    },
    mobileMenu: {
        overflow: "hidden",
        left: "50%",
        transform: "translate(-50%,0%)",
        opacity: 0,
        visibility: "hidden",
        height: "0px",
        width: "100%",
        position: "absolute",
        zIndex: -1,
        transition: "all 0.3s ease-in-out",
    },
    mobileMenuOpen: {
        transform: "translate(-50%,0%)",
        opacity: 1,
        visibility: "visible",
        height: "214px",
    },
}));

interface props {
    links: NavLinks;
    socialLinks: SocialLinks;
    className: string;
}

const Nav: React.FC<props> = ({ links, socialLinks, ...rest }) => {
    const [navOpen, setNavOpen] = useState(false);
    const router = useRouter();
    const { classes, cx } = useStyles();
    const items = links.map((link) => (
        <Link href={link.link} key={link.id}>
            <a
                className={
                    "_header__nav__links " +
                    cx(classes.link, {
                        [classes.linkActive]: router.pathname.includes(
                            link.link
                        ),
                    })
                }
            >
                {link.label}
            </a>
        </Link>
    ));
    return (
        <Header height={56} mb="xl" {...rest} className={classes.header}>
            <Container className={classes.inner}>
                <Group className={classes.links + " _header__nav"} spacing={5}>
                    {items}
                </Group>

                <Title order={3} className="_header__title">
                    Soumen Khara
                </Title>

                <Group
                    spacing={0}
                    className={classes.social + " _header__social"}
                    position="right"
                    noWrap
                >
                    {socialLinks.map((socialLink) => (
                        <ActionIcon
                            key={socialLink.id}
                            size="lg"
                            className="_header__social__links"
                        >
                            {socialLink.icon}
                        </ActionIcon>
                    ))}
                </Group>
                <Burger
                    opened={navOpen}
                    onClick={() => setNavOpen(!navOpen)}
                    className={classes.burger + " _header__social"}
                />
            </Container>
            <Paper
                withBorder
                p="lg"
                className={cx(classes.mobileMenu, {
                    [classes.mobileMenuOpen]: navOpen,
                })}
                shadow="lg"
            >
                <Stack align="center">
                    {items}
                    <Group spacing={0} position="right" noWrap>
                        {socialLinks.map((socialLink) => (
                            <ActionIcon
                                key={socialLink.id}
                                size="lg"
                                className="_header__social__links"
                            >
                                {socialLink.icon}
                            </ActionIcon>
                        ))}
                    </Group>
                </Stack>
            </Paper>
        </Header>
    );
};

export default Nav;
