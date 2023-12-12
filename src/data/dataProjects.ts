
export type Project = {
    id: number,
    name:string,
    languages:string[],
    link: string,
}

export const dataProjects:Project[] = [
    {
        id: 1,
        name: "Linear Regression using Numpy",
        languages: ["pyhton", "numpy", "matplotlib", "pandas"],
        link: "https://github.com/alegbeleye/Numpy-Linear-Regression.git",
    },
    {
        id: 2,
        name: "Salary Prediction Using Numpy",
        languages: ["numpy", "matplotlib", "pandas", "SciKit Learn"],
        link: "https://github.com/alegbeleye/Salary-Prediction.git",
    }
]