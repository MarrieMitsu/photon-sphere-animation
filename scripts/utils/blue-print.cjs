// constants

const SphereBluePrint = [
    {
        svgAttributes: {
            class: 'plane z1-plane',
            animation: {
                duration: 7000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 170,
        widths: [18, 15, 12, 9, 6, 9, 12, 15, 18],
        shapes: ["uniform"],
        arcDasharray: [3, 1, 3, 1, 3],
        align: "center",
        attributes: {
            fill: ['rgba(252, 219, 72, 1)', 'rgba(252, 172, 72, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            class: 'plane z2-plane',
            animation: {
                duration: 6000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 160,
        widths: [17, 14, 11, 8, 5, 8, 11, 14, 17],
        shapes: ["uniform"],
        arcDasharray: [3, 1, 3, 1, 3],
        align: "center",
        attributes: {
            fill: ['rgba(252, 236, 72, 1)', 'rgba(221, 255, 255, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            class: 'plane z3-plane',
            animation: {
                duration: 5000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 145,
        widths: [16, 13, 10, 7, 4, 7, 10, 13, 16],
        shapes: ["uniform"],
        arcDasharray: [3, 1, 3, 1, 3],
        align: "center",
        attributes: {
            fill: ['rgba(252, 219, 72, 1)', 'rgba(252, 172, 72, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            class: 'plane z4-plane',
            animation: {
                duration: 3000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 125,
        widths: [15, 12, 9, 6, 3, 6, 9, 12, 15],
        shapes: ["uniform"],
        arcDasharray: [3, 1, 3, 1, 3],
        align: "center",
        attributes: {
            fill: ['rgba(252, 236, 72, 1)', 'rgba(221, 255, 255, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            class: 'plane z5-plane',
            animation: {
                duration: 2000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 100,
        widths: [14, 11, 8, 5, 2, 5, 8, 11, 14],
        shapes: ["uniform"],
        arcDasharray: [3, 1, 3, 1, 3],
        align: "center",
        attributes: {
            fill: ['rgba(252, 219, 72, 1)', 'rgba(252, 172, 72, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            class: 'plane z6-plane',
            animation: {
                duration: 1000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 70,
        widths: [13, 10, 7, 4, 1, 4, 7, 10, 13],
        shapes: ["uniform"],
        arcDasharray: [3, 1, 3, 1, 3],
        align: "center",
        attributes: {
            fill: ['rgba(252, 240, 72, 1)', 'rgba(255, 250, 176, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
];

const Z0PlaneBluePrint = [
    {   
        svgAttributes: {
            animation: {
                duration: 1000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 50,
        widths: [5],
        shapes: ["uniform"],
        arcDasharray: [60, 12],
        align: "face-out",
        attributes: {
            fill: ['rgba(200, 214, 255, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 10000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 60,
        widths: [5],
        shapes: ["rounded"],
        arcDasharray: [40, 32],
        align: "face-out",
        attributes: {
            fill: ['rgba(150, 177, 255, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 5000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 80,
        widths: [3],
        shapes: ["edge"],
        arcDasharray: [30, 60],
        align: "face-out",
        attributes: {
            fill: ['rgba(99, 139, 255, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 8000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 100,
        widths: [10],
        shapes: ["double-edge"],
        arcDasharray: [70, 20],
        align: "face-out",
        attributes: {
            fill: ['rgba(56, 106, 255, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 8000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 180,
        widths: [18, 15, 12, 9, 6, 9, 12, 15, 18],
        shapes: ["uniform"],
        arcDasharray: [3, 1, 3, 1, 3],
        align: "center",
        attributes: {
            fill: ['rgba(252, 236, 72, 1)', 'rgba(221, 255, 255, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 12000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 200,
        widths: [18, 15, 12, 9, 6, 9, 12, 15, 18],
        shapes: ["uniform"],
        arcDasharray: [3, 1, 3, 1, 3],
        align: "center",
        attributes: {
            fill: ['rgba(233, 72, 252, 1)', 'rgba(255, 222, 181, 1)'],
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 6000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 250,
        widths: [20, 15, 10],
        shapes: ["reverse-double-edge"],
        arcDasharray: [60, 15, 40, 15, 20],
        align: "face-in",
        attributes: {
            fill: 'rgba(250, 72, 252, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 18000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 300,
        widths: [5],
        shapes: ["uniform-iontail"],
        arcDasharray: [80, 10],
        align: "face-out",
        attributes: {
            fill: 'rgba(252, 72, 186, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 13000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 320,
        widths: [9],
        shapes: ["meteor"],
        arcDasharray: [80, 10],
        align: "face-out",
        attributes: {
            fill: 'rgba(252, 72, 148, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 4000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 330,
        widths: [1],
        shapes: ["uniform"],
        arcDasharray: [90, 10, 120, 20, 5, 20, 3, 1, 100],
        align: "face-out",
        attributes: {
            fill: 'rgba(252, 72, 119, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 2000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 340,
        widths: [1],
        shapes: ["uniform"],
        arcDasharray: [30],
        align: "face-out",
        attributes: {
            fill: 'rgba(252, 72, 102, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 8000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 380,
        widths: [2],
        shapes: ["uniform"],
        arcDasharray: [70, 20],
        align: "face-out",
        attributes: {
            fill: 'rgba(252, 72, 72, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 20000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 420,
        widths: [20],
        shapes: ["reverse-comet"],
        arcDasharray: [70, 20, 20, 10, 30],
        align: "face-out",
        attributes: {
            fill: 'rgba(252, 72, 72, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 24000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 440,
        widths: [5],
        shapes: ["bottom-bevelled-antitail"],
        arcDasharray: [35, 40],
        align: "face-out",
        attributes: {
            fill: 'rgba(252, 72, 182, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 30000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 480,
        widths: [30],
        shapes: ["double-edge", "rounded"],
        arcDasharray: [70, 20],
        align: "face-out",
        attributes: {
            fill: 'rgba(252, 72, 246, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 2000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 500,
        widths: [3],
        shapes: ["meteor"],
        arcDasharray: [2],
        align: "face-out",
        attributes: {
            fill: 'rgba(252, 240, 72, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 30000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 540,
        widths: [30],
        shapes: ["reverse-double-edge", "rounded"],
        arcDasharray: [70, 20],
        align: "face-out",
        attributes: {
            fill: 'rgba(106, 72, 252, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 60000,
                direction: 'reverse',
                reverse: true,
            },
        },
        radius: 550,
        widths: [5],
        shapes: ["rounded"],
        arcDasharray: [40, 5],
        align: "face-out",
        attributes: {
            fill: 'rgba(72, 93, 252, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 20000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 600,
        widths: [20],
        shapes: ["uniform-iontail"],
        arcDasharray: [5, 45],
        align: "face-out",
        attributes: {
            fill: 'rgba(72, 106, 252, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
    {
        svgAttributes: {
            animation: {
                duration: 200000,
                direction: 'normal',
                reverse: false,
            },
        },
        radius: 650,
        widths: [3],
        shapes: ["bevelled-edge"],
        arcDasharray: [5, 3],
        align: "face-out",
        attributes: {
            fill: 'rgba(59, 92, 235, 1)',
            stroke: 'none',
            strokeWidth: '0',
            fillOpacity: '1',
        }
    },
];

module.exports = {
    SphereBluePrint,
    Z0PlaneBluePrint,
}