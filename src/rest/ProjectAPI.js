const Project_ENDPOINT = 'https://6405117feed195a99f7baa23.mockapi.io/CharaList/Webpage'

class ProjectAPI {
    get = async () => {
        try {
            const resp = await fetch(Project_ENDPOINT)
            const data = await resp.json();
            console.log(data)
            return data;
        } catch(e) {
            console.log("There is an issue with Fetching the Project.")
        }
    }
    addCharacter = (name, gender, race, nationality, occupation, description, backstory) => {

    }

    deleteCharacter = (characterId) => {

    }

    addWeapon = (name, slot, weaponType, clipType, specialType) => {

    }

    updateWeapon = (newName) => {

    }

    deleteWeapon = (weaponId) => {

    }

    addPower = (name, details) => {

    }

    updatePower = (newName) => {

    }

    deletePower = (powerId) => {
        
    }
}