import {
    ActionIcon,
    Button,
    createStyles,
    Group,
    Paper,
    SimpleGrid,
    Text,
    Textarea,
    TextInput,
} from "@mantine/core";
import React from "react";
import { Contact } from "./Contact";
import bg from "../assets/svg/contact-bg.svg";
const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan("sm");

    return {
        wrapper: {
            display: "flex",
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.white,
            borderRadius: theme.radius.lg,
            padding: 4,

            [BREAKPOINT]: {
                flexDirection: "column",
            },
        },

        form: {
            boxSizing: "border-box",
            flex: 1,
            padding: theme.spacing.xl,
            paddingLeft: theme.spacing.xl * 2,
            borderLeft: 0,

            [BREAKPOINT]: {
                padding: theme.spacing.md,
                paddingLeft: theme.spacing.md,
            },
        },

        fields: {
            marginTop: -12,
        },

        fieldInput: {
            flex: 1,

            "& + &": {
                marginLeft: theme.spacing.md,

                [BREAKPOINT]: {
                    marginLeft: 0,
                    marginTop: theme.spacing.md,
                },
            },
        },

        fieldsGroup: {
            display: "flex",

            [BREAKPOINT]: {
                flexDirection: "column",
            },
        },

        contacts: {
            boxSizing: "border-box",
            position: "relative",
            borderRadius: theme.radius.md - 2,
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid transparent",
            padding: theme.spacing.xl,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.sm,
                paddingLeft: theme.spacing.md,
            },
        },

        title: {
            marginBottom: theme.spacing.lg,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },

        control: {
            [BREAKPOINT]: {
                flex: 1,
            },
        },
        links: {
            svg: {
                color: "white",
                width: 28,
                height: 28,
            },
        },
    };
});

interface props {
    socialLinks: SocialLinks;
}

const ContactUs: React.FC<props> = ({ socialLinks }) => {
    const { classes } = useStyles();
    return (
        <Paper withBorder radius="md">
            <div className={classes.wrapper}>
                <div className={classes.contacts}>
                    <Text
                        size="lg"
                        weight={700}
                        className={classes.title}
                        sx={{ color: "#fff" }}
                    >
                        Contact information
                    </Text>

                    <Contact variant="white" />
                    <Group className={classes.links} mt="lg">
                        {socialLinks.map((socialLink) => (
                            <ActionIcon
                                key={Math.random()}
                                size="lg"
                                variant="transparent"
                            >
                                {socialLink.icon}
                            </ActionIcon>
                        ))}
                    </Group>
                </div>

                <form
                    className={classes.form}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <Text size="lg" weight={700} className={classes.title}>
                        Get in touch
                    </Text>

                    <div className={classes.fields}>
                        <TextInput label="Your name" placeholder="Your name" />
                        <TextInput
                            mt="md"
                            label="Your email"
                            placeholder="hello@soumen.dev"
                            required
                        />

                        <Textarea
                            mt="md"
                            label="Your message"
                            placeholder="Please include all relevant information"
                            minRows={3}
                        />

                        <Group position="right" mt="md">
                            <Button type="submit" className={classes.control}>
                                Send message
                            </Button>
                        </Group>
                    </div>
                </form>
            </div>
        </Paper>
    );
};

export default ContactUs;
