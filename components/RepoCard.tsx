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
        height: "100%",
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
    wrapper: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
    },
}));

interface props {
    repo: any;
}

const RepoCard: React.FC<props> = ({ repo }) => {
    const { classes } = useStyle();
    return (
        <Paper
            withBorder
            p="md"
            className={classes.repo}
            component="a"
            href={repo.html_url}
            target="_blank"
        >
            <div className={classes.wrapper}>
                <div>
                    <Group position="apart" mb="md">
                        <Text
                            color="blue"
                            size="xl"
                            weight={600}
                            className="repo-title"
                        >
                            {repo.name}
                        </Text>
                        <ActionIcon size="lg" variant="transparent">
                            <BrandGithub />
                        </ActionIcon>
                    </Group>
                    <Text mb="md">{repo.description}</Text>
                </div>
                <Group>
                    {repo.language && (
                        <Badge variant="outline" color="gray">
                            {repo.language}
                        </Badge>
                    )}

                    <Badge
                        color="gray"
                        className={classes.badge}
                        variant="outline"
                        leftSection={<Star size={14} />}
                    >
                        {repo.watchers}
                    </Badge>
                    <Badge
                        color="gray"
                        className={classes.badge}
                        variant="outline"
                        leftSection={<GitFork size={14} />}
                    >
                        {repo.forks}
                    </Badge>
                </Group>
            </div>
        </Paper>
    );
};

export default RepoCard;
