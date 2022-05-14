import {
    ActionIcon,
    Badge,
    createStyles,
    Group,
    Paper,
    Text,
} from "@mantine/core";
import React from "react";
import { BrandGithub, GitFork, Star } from "tabler-icons-react";

const useStyle = createStyles((theme) => ({
    badge: {
        ".mantine-Badge-leftSection": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    repo: {
        "&:hover": {
            transform: "translateY(-5px)",
            ".repo-title": {
                color: theme.colors.cyan[9],
            },
        },
        transition: "all 0.15s ease-in-out",
        cursor: "pointer",
        "& *": {
            pointerEvents: "none",
            userSelect: "none",
        },
    },
}));

interface props {}

const RepoCard: React.FC<props> = ({}) => {
    const { classes } = useStyle();
    return (
        <Paper withBorder p="md" className={classes.repo}>
            <Group position="apart" mb="md">
                <Text
                    color="blue"
                    size="xl"
                    weight={600}
                    className="repo-title"
                >
                    google-calculator
                </Text>
                <ActionIcon size="lg" variant="transparent">
                    <BrandGithub />
                </ActionIcon>
            </Group>
            <Text mb="md">
                Simple Web Application that offer you to create video meeting
                room using WebRTC and Socket.
            </Text>
            <Group>
                <Badge variant="outline" color="gray">
                    Javascript
                </Badge>
                <Badge
                    color="gray"
                    className={classes.badge}
                    variant="outline"
                    leftSection={<Star size={14} />}
                >
                    32
                </Badge>
                <Badge
                    color="gray"
                    className={classes.badge}
                    variant="outline"
                    leftSection={<GitFork size={14} />}
                >
                    32
                </Badge>
            </Group>
        </Paper>
    );
};

export default RepoCard;
