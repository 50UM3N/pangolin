import {
    ActionIcon,
    Anchor,
    Container,
    createStyles,
    Group,
    Text,
    Title,
} from "@mantine/core";
import React from "react";

const useStyle = createStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing.sm,
        paddingBottom: theme.spacing.sm,
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
    },
    links: {
        [theme.fn.smallerThan("xs")]: {
            marginTop: theme.spacing.md,
        },
    },
    afterFooter: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
        }`,
    },
}));

interface props {
    links: NavLinks;
    socialLinks: SocialLinks;
    className: string;
}

const Footer: React.FC<props> = ({ links, socialLinks, className }) => {
    const { classes } = useStyle();
    return (
        <footer className={classes.footer + " " + className}>
            <Container py="xl">
                <Group position="apart">
                    <Title order={3}>Soumen Khara</Title>
                    <Group className={classes.links}>
                        {links.map((link) => (
                            <Anchor<"a">
                                color="dimmed"
                                key={Math.random()}
                                href={link.link}
                                onClick={(event) => event.preventDefault()}
                                size="sm"
                            >
                                {link.label}
                            </Anchor>
                        ))}
                    </Group>
                </Group>
            </Container>
            <Container className={classes.afterFooter}>
                <Group position="apart">
                    <Text color="dimmed" size="sm">
                        © 2020 Soumen Khara. All rights reserved.
                    </Text>

                    <Group spacing={0} position="right" noWrap>
                        {socialLinks.map((socialLink) => (
                            <ActionIcon key={Math.random()} size="lg">
                                {socialLink.icon}
                            </ActionIcon>
                        ))}
                    </Group>
                </Group>
            </Container>
        </footer>
    );
};

export default Footer;
