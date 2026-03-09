const requireComponent = require.context(
    "../components",
    true,
    /\.tsx$/
)

export function loadComponents() {

    const components: any[] = []

    requireComponent.keys().forEach((fileName: string) => {

        const component = requireComponent(fileName)

        if (component?.default) {
            components.push({
                name: fileName
                    .replace("./", "")
                    .replace(".tsx", ""),
                component: component.default
            })
        }

    })

    return components

}