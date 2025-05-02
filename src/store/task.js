// Consumir api task

const apiTask = `https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/tasks`;

export const getTasks = async () => {

    try {
        const response = await fetch(apiTask);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};