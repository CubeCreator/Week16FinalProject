const Project_ENDPOINT = 'https://6405117feed195a99f7baa23.mockapi.io/CharaList/Webpage'

class ProjectAPI {
    get = async () => {
        try {
            const resp = await fetch(Project_ENDPOINT)
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("There is an issue with Fetching the Project.")
        }
    }
}