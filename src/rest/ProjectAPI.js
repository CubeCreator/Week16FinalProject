const Project_ENDPOINT = ''

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