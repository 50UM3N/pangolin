import {
    ActionIcon,
    Container,
    createStyles,
    Group,
    Header,
    Title,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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
            width: "auto",
            marginLeft: "auto",
        },
    },

    burger: {
        marginRight: theme.spacing.md,

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
}));

interface props {
    links: NavLinks;
    socialLinks: SocialLinks;
}

const Nav: React.FC<props> = ({ links, socialLinks }) => {
    const router = useRouter();
    const { classes, cx } = useStyles();
    const items = links.map((link) => (
        <div key={Math.random()}>
            <Link href={link.link}>
                <a
                    className={cx(classes.link, {
                        [classes.linkActive]: router.pathname.includes(
                            link.link
                        ),
                    })}
                >
                    {link.label}
                </a>
            </Link>
        </div>
    ));
    return (
        <Header height={56} mb="xl">
            <Container className={classes.inner}>
                <Group className={classes.links} spacing={5}>
                    {items}
                </Group>

                <Title order={3}>Soumen Khara</Title>

                <Group
                    spacing={0}
                    className={classes.social}
                    position="right"
                    noWrap
                >
                    {socialLinks.map((socialLink) => (
                        <ActionIcon key={Math.random()} size="lg">
                            {socialLink.icon}
                        </ActionIcon>
                    ))}
                </Group>
            </Container>
        </Header>
    );
};

export default Nav;
