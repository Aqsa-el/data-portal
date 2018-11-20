/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site map component.
 */

// TODO move to yml and put in the content directory

const siteMap =
    [
        {
            name: "About",
            key: "about",
            children: [
                {
                    name: "What is the Platform",
                    key: "platform",
                    children: [
                        {
                            name: "What is the Platform",
                            key: "/about/platform/dcp",
                            children: [
                                {
                                    name: "Ingest Service",
                                    key: "/about/platform/dcp/ingest-service"
                                },
                                {
                                    name: "Data Store",
                                    key: "/about/platform/dcp/data-store"
                                },
                                {
                                    name: "Data Browser",
                                    key: "/about/platform/dcp/data-browser"
                                },
                                {
                                    name: "Data Processing Pipelines",
                                    key: "/about/platform/dcp/data-processing-pipelines"
                                }
                            ]
                        },
                        {
                            name: "Data Lifecycle",
                            key: "/about/platform/data-lifecycle",
                        },
                        {
                            name: "Data Use Agreement",
                            key: "/about/platform/data-use-agreement",
                        }
                    ]
                }
            ]
        },
        {
            name: "Analyze",
            key: "analyze",
            children: [
                {
                    name: "Portals",
                    key: "portals",
                    children: [
                        {
                            name: "Visualization Portals",
                            key: "/analyze/portals/visualization-portals"
                        },
                        {
                            name: "About Visualization Portals",
                            key: "/analyze/portals/about"
                        }
                    ]
                },
                {
                    name: "Methods",
                    key: "methods",
                    children: [
                        {
                            name: "Methods",
                            key: "/analyze/methods/methods"
                        },
                        {
                            name: "About Methods",
                            key: "/analyze/methods/about"
                        }
                    ]
                },
                {
                    name: "Visualization Components",
                    key: "visualization-components",
                    children: [
                        {
                            name: "Visualization Components",
                            key: "/analyze/visualization-components/visualization-components"
                        },
                        {
                            name: "About Visualization Components",
                            key: "/analyze/visualization-components/about"
                        }
                    ]
                }
            ]
        },
        {
            name: "Learn",
            key: "learn",
            children:
                [
                    {
                        name: "User Guides",
                        key: "userguides",
                        children: [
                            {
                                name: "Accessing Data",
                                key: "/learn/userguides/accessing-data",
                                children: [
                                    {
                                        name: "Quick Start Guide",
                                        key: "/learn/userguides/accessing-data/quick-start-guide"
                                    },
                                    {
                                        name: "CLI Data Access",
                                        key: "/learn/userguides/accessing-data/using-the-cli-to-access-data"
                                    }
                                ]

                            }, {

                                name: "Contributing Data",
                                key: "/learn/userguides/contributing-data",
                                children: [
                                ]
                            },
                            {
                                name: "Data Processing Pipelines",
                                key: "/learn/userguides/data-processing-pipelines/overview-of-data-processing-pipelines-user-guides",
                                children: [
                                    {
                                        name: "Smart-seq2 Workflow",
                                        key: "/learn/userguides/data-processing-pipelines/smart-seq2-workflow"
                                    },
                                    // {
                                    //     name: "Optimus Prime Workflow",
                                    //     key: "/learn/userguides/data-processing-pipelines/optimus-prime-workflow"
                                    //
                                    // },
                                    {
                                        name: "File Formats",
                                        key: "/learn/userguides/data-processing-pipelines/file-formats"
                                    },
                                    {
                                        name: "QC Metrics",
                                        key: "/learn/userguides/data-processing-pipelines/qc-mertics"
                                    },
                                    {
                                        name: "Pipeline Portability",
                                        key: "/learn/userguides/data-processing-pipelines/pipeline-portability"
                                    },
                                    {
                                        name: "Community Pipeline: 3' scRNA-seq",
                                        key: "/learn/userguides/data-processing-pipelines/community-pipeline-3-prime-scrna-seq"
                                    }
                                ]
                            },
                            {

                                name: "Analysis Applications",
                                key: "/learn/userguides/analysis-applications"
                            }
                        ]
                    },
                    {
                        name: "Metadata",
                        key: "metadata",
                        children: [
                            {
                                name: "Metadata Dictionary",
                                key: "/learn/metadata/metadata-dictionary",
                                children: [
                                    {
                                        name: "Biomaterial",
                                        key: "/learn/metadata/metadata-dictionary/biomaterial"
                                    },
                                    {
                                        name: "Process",
                                        key: "/learn/metadata/metadata-dictionary/process"
                                    },
                                    {
                                        name: "Protocol",
                                        key: "/learn/metadata/metadata-dictionary/protocol"
                                    },
                                    {
                                        name: "Project",
                                        key: "/learn/metadata/metadata-dictionary/project"
                                    },
                                    {
                                        name: "File",
                                        key: "/learn/metadata/metadata-dictionary/file"
                                    }
                                ]
                            }
                            ,
                            {
                                name: "Metadata Structure",
                                key: "/learn/metadata/structure"
                            },
                            {
                                name: "Metadata Design Choices",
                                key: "/learn/metadata/rationale"
                            }


                        ]
                    },
                    {
                        name: "Development Guides",
                        key: "development-guides",
                        children: [
                            {
                                name: "Ingest Data Brokers",
                                key: "/learn/development-guides/ingest-broker-development-guide"
                            },
                            {
                                name: "Processing Pipelines",
                                key: "/learn/development-guides/pipeline-processing-development-guides/overview-pipeline-processing-development-guides",
                                children: [
                                    {
                                        name: "Pipeline Best Practices",
                                        key: "/learn/development-guides/pipeline-processing-development-guides/workflow-best-practices"
                                    },
                                    {
                                        name: "Building Pipelines",
                                        key: "/learn/development-guides/pipeline-processing-development-guides/pipeline-development-guide"
                                    },
                                    {
                                        name: "Testing Pipelines",
                                        key: "/learn/development-guides/pipeline-processing-development-guides/testing-pipelines"
                                    },
                                    {
                                        name: "Contributing Pipelines",
                                        key: "/learn/development-guides/pipeline-processing-development-guides/contributing-a-pipeline-to-the-hca-dcp"
                                    },
                                    {
                                        name: "Portability Service Environments",
                                        key: "/learn/development-guides/pipeline-processing-development-guides/adding-an-environment-to-the-portability-service"
                                    }
                                ]
                            },
                            {
                                name: "Analysis Applications",
                                key: "/learn/development-guides/analysis-applications"
                            },
                            {
                                name: "Data Consumer Vignettes",
                                key: "/learn/development-guides/consumer-vignettes"
                            }
                        ]
                    },
                    {
                        name: "API Documentation",
                        key: "api-documentation",
                        children: [
                            {
                                name: "Data Store API",
                                key: "/learn/api-documentation/data-store-consumer-api"
                            }
                        ]
                    }
                ]
        },
        {
            name: "Contact",
            key: "contact",
            children: [
                {
                    name: "",
                    key: "contact",
                    children: [
                        {
                            name: "Contact Us",
                            key: "/contact/contact/contact-us"
                        },
                        {
                            name: "Join the Discussion",
                            key: "/contact/contact/join-the-discussion"
                        }
                    ]
                }
            ]
        },
        {
            name: "Content Guide",
            key: "document",
            children: [
                {
                    name: "Creating Content",
                    key: "creating-content",
                    children: [
                        {
                            name: "Overview",
                            key: "/document/creating-content/overview"
                        },
                        {
                            name: "Editing an Existing Page",
                            key: "/document/creating-content/editing-an-existing-page"
                        },
                        {
                            name: "Creating Links",
                            key: "/document/creating-content/creating-links"
                        },
                        {
                            name: "Using Images",
                            key: "/document/creating-content/using-images"
                        },
                        {
                            name: "Creating a New Page",
                            key: "/document/creating-content/creating-a-new-page"
                        },
                        {
                            name: "Style Guide",
                            key: "/document/creating-content/content-style-guide"
                        }
                    ]
                }
            ]
        },
        {
            name: "Contribute",
            key: "contribute",
            children: [
                {
                    name: "",
                    key: "overview",
                    children: [
                        {
                            name: "Overview",
                            key: "/contribute/overview/overview"
                        }
                    ]
                }
            ]
        },
        {
            name: "Help",
            key: "help",
            children: [
                {
                    name: "",
                    key: "help",
                    children: [
                        {
                            name: "Help & FAQ",
                            key: "/help/help/help-and-faq"
                        }
                    ]
                }
            ]
        },
        {
            name: "Privacy",
            key: "privacy",
            children: [
                {
                    name: "",
                    key: "privacy",
                    children: [
                        {
                            name: "",
                            key: "/privacy/privacy/privacy"
                        }
                    ]
                }
            ]
        }
    ];

export function getSection(path) {

    const key = path.split("/")[1];
    const section = siteMap.find((s) => {
        return s.key === key;
    });

    if (!section) {
        throw new Error("section with key: '" + key + "' is not found!");
    }
    return section;
}

export function getTabs(path) {

    const section = getSection(path);

    if (!section.children) {
        throw new Error("No children for section: '" + section.key + "'");
    }

    section.children.forEach((tab) => {
        if (!tab.children || tab.children.length == 0) {
            throw new Error("Tab  '" + tab.name + "' has no children and therefore no landing page.");
        }
    });

    return section.children;
}

export function getTab(path) {
    const tabs = getTabs(path);
    const key = path.split("/")[2];
    const tab = tabs.find((s) => {
        return s.key === key;
    });

    if (!tab) {
        throw new Error("No tab for key: '" + key + "'");
    }
    return tab;
}

export function getNav(path) {
    const tab = getTab(path);
    if (!tab) {
        return [];
    }
    return tab.children;
}

