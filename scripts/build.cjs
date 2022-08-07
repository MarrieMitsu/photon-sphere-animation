const PhotonSphere = require('photon-sphere');
const { Z0PlaneBluePrint, SphereBluePrint } = require('./utils/blue-print.cjs');
const { createDOM, NAMESPACE_URI, HSL_COLOR_RANGE, randNumber } = require('./utils/utils.cjs');
const { JSDOM } = require('jsdom');
const path = require('path');
const fs = require('fs');

function glowEffectFilter(id, glowRange) {
    const filterEl = createDOM('filter', {
        attributes: {
            id: id,
            filterUnits: "userSpaceOnUse",
        },
    }, {
        namespaceURI: NAMESPACE_URI.SVG,
    });

    const feGaussianBlurEl = createDOM('feGaussianBlur', {
        attributes: {
            in: "SourceGraphic",
            stdDeviation: glowRange,
            result: "blur",
        },
    }, {
        namespaceURI: NAMESPACE_URI.SVG,
    });

    const feMergeEl = createDOM('feMerge', {
        attributes: {
            id: id,
            filterUnits: "userSpaceOnUse",
        },
    }, {
        namespaceURI: NAMESPACE_URI.SVG,
    });

    ["blur", "SourceGraphic"].forEach(e => {
        const feMergeNodeEl = createDOM('feMergeNode', {
            attributes: {
                in: e,
            },
        }, {
            namespaceURI: NAMESPACE_URI.SVG,
        });

        feMergeEl.appendChild(feMergeNodeEl);
    });

    filterEl.appendChild(feGaussianBlurEl);
    filterEl.appendChild(feMergeEl);

    return filterEl;

}

// generateBgStarsPoint
function generateBgStarsPoint() {
    try {
        const SCREEN_SIZE = 1440;
        const diameter = (SCREEN_SIZE * Math.sqrt(2)) * Math.sqrt(2);

        const data = [];
        for (let i = 0; i < diameter; i++) {
            const x = Math.random() * diameter;
            const y = Math.random() * diameter;
            const z = Math.random() * 1000;
            const radius = Math.random() * 1.2;
            const hue = HSL_COLOR_RANGE[randNumber(0, HSL_COLOR_RANGE.length - 1)];
            const sat = randNumber(50, 100);

            data.push({ x, y, z, radius, hue, sat });
        }

        // generate
        const jsonPath = path.join(__dirname, '..', 'bg-stars.json');
        fs.writeFileSync(jsonPath, JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
}
// generateBgStarsPoint();

// generatePhotonSphere
function generatePhotonSphere() {
    try {
        const svgs = []; // array of DOM object
        const orbitIds = []; // array of { [string]:  }

        // Z0Plane
        for (let i = 0; i < Z0PlaneBluePrint.length; i++) {
            const ids = {
                id: `z0-plane-${i + 1}`,
                animation: Z0PlaneBluePrint[i].svgAttributes.animation,
            };

            const orbit = PhotonSphere({
                radius: Z0PlaneBluePrint[i].radius,
                widths: Z0PlaneBluePrint[i].widths,
                offset: 0,
                shapes: Z0PlaneBluePrint[i].shapes,
                arcDasharray: Z0PlaneBluePrint[i].arcDasharray,
                align: Z0PlaneBluePrint[i].align,
                attributes: Z0PlaneBluePrint[i].attributes,
            });

            const wrapperEl = createDOM('div', {
                attributes: {
                    class: 'plane z0-plane',
                },
            });

            const svgEl = createDOM('svg', {
                attributes: {
                    id: ids.id,
                    // class: 'plane z0-plane',
                    width: Z0PlaneBluePrint[i].radius * 2,
                    height: Z0PlaneBluePrint[i].radius * 2,
                    overflow: 'visible',
                    xmlns: NAMESPACE_URI.SVG,
                },
                // styles: {
                //     animation: Z0PlaneBluePrint[i].svgAttributes.animation,
                // }
            }, {
                namespaceURI: NAMESPACE_URI.SVG,
            });

            // const filterEl = glowEffectFilter(`glow-${i}`, 100);

            for (let j = 0; j < orbit.length; j++) {
                const pathEl = createDOM('path', {
                    attributes: {
                        d: orbit[j].path,
                        fill: orbit[j].attributes.fill,
                        stroke: orbit[j].attributes.stroke,
                        'stroke-width': orbit[j].attributes.strokeWidth,
                        'fill-opacity': orbit[j].attributes.fillOpacity,
                        'shape-rendering': "geometricPrecision",
                        'stroke-linejoin': "round",
                        'vector-effect': "non-scaling-stroke",
                        // filter: `url(#glow-${i})`,
                    }
                }, {
                    namespaceURI: NAMESPACE_URI.SVG,
                });

                // svgEl.appendChild(filterEl);
                svgEl.appendChild(pathEl);
            }

            wrapperEl.appendChild(svgEl);
            svgs.push(wrapperEl);
            orbitIds.push(ids);
        }

        // Sphere
        for (let i = 0; i < SphereBluePrint.length; i++) {
            const ids = {
                id: `z${i + 1}-plane-1`,
                animation: SphereBluePrint[i].svgAttributes.animation,
            };

            const orbit = PhotonSphere({
                radius: SphereBluePrint[i].radius,
                widths: SphereBluePrint[i].widths,
                offset: 0,
                shapes: SphereBluePrint[i].shapes,
                arcDasharray: SphereBluePrint[i].arcDasharray,
                align: SphereBluePrint[i].align,
                attributes: SphereBluePrint[i].attributes,
            });

            // console.log(orbit);

            const wrapperEl = createDOM('div', {
                attributes: {
                    class: SphereBluePrint[i].svgAttributes.class,
                },
            });

            const svgEl = createDOM('svg', {
                attributes: {
                    id: ids.id,
                    // class: SphereBluePrint[i].svgAttributes.class,
                    width: SphereBluePrint[i].radius * 2,
                    height: SphereBluePrint[i].radius * 2,
                    overflow: 'visible',
                    xmlns: NAMESPACE_URI.SVG,
                },
                // styles: {
                //     animation: SphereBluePrint[i].svgAttributes.animation,
                // }
            }, {
                namespaceURI: NAMESPACE_URI.SVG,
            });

            for (let j = 0; j < orbit.length; j++) {
                const pathEl = createDOM('path', {
                    attributes: {
                        d: orbit[j].path,
                        fill: orbit[j].attributes.fill,
                        stroke: orbit[j].attributes.stroke,
                        'stroke-width': orbit[j].attributes.strokeWidth,
                        'fill-opacity': orbit[j].attributes.fillOpacity,
                        'shape-rendering': "geometricPrecision",
                        'stroke-linejoin': "round",
                        'vector-effect': "non-scaling-stroke",
                    }
                }, {
                    namespaceURI: NAMESPACE_URI.SVG,
                });

                svgEl.appendChild(pathEl);
            }

            wrapperEl.appendChild(svgEl);
            svgs.push(wrapperEl);
            orbitIds.push(ids);
        }

        // Generate
        const jsonPath = path.join(__dirname, '..', 'orbit-ids.json');
        fs.writeFileSync(jsonPath, JSON.stringify(orbitIds));

        const htmlPath = path.join(__dirname, '..', 'index.html');
        JSDOM.fromFile(htmlPath)
            .then(dom => {
                const space = dom.window.document.getElementById('photon-sphere');
                while (space.firstChild) {
                    space.firstChild.remove();
                }

                for (let i = 0; i < svgs.length; i++) {
                    space.appendChild(svgs[i]);
                }

                fs.writeFileSync(htmlPath, dom.serialize());
            });

    } catch (error) {
        console.error(error);
    }
}
generatePhotonSphere();