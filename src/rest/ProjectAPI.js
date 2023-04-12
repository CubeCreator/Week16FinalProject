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
        console.log(name, gender, race, nationality, occupation, description, backstory)
        fetch(this.Project_ENDPOINT + "/characterInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        }).then((result) => {
            this.get();
            console.log(result)
        })

    }

    deleteCharacter = (characterId) => {
        console.log(characterId)
        fetch(this.Project_ENDPOINT, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((result) => {
            console.log(result)
            this.get();
        })

    }

    addWeapon = (name, slot, weaponType, clipType, specialType) => {
        console.log(name, slot, weaponType, clipType, specialType)

    }

    updateWeapon = (newName, weaponId) => {
        console.log(newName, weaponId)

    }

    deleteWeapon = (weaponId) => {
        console.log(weaponId)

    }

    addPower = (name, details) => {
        console.log(name, details)

    }

    updatePower = (newName, powerId) => {
        console.log(newName, powerId)

    }

    deletePower = (powerId) => {
        console.log(powerId)
        
    }
}