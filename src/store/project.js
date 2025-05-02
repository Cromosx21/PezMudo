// Consumir la api de endPoint para los project

const apiProject = "https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects";

export const getProjects = async () => {
    try {
        const response = await fetch(apiProject);
        const data = await response.json();
        
        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}
