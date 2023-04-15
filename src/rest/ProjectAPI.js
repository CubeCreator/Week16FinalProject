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
        console.log("name:", name, "gender:", gender, "race:", race, "nationality:", nationality, "occupation:", occupation, "description:", description, "backstory:", backstory)
        try {
            fetch(this.Project_ENDPOINT + "/characterInfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name: name, gender: gender, race: race, nationality: nationality, occupation: occupation, description: description, backstory: backstory}),
            }).then((result) => {
                this.get();
                console.log(result)
            })
        } catch(e) {
            console.log("There is an issue with Adding Characters.")
        }
    }

    deleteCharacter = (characterId) => {
        console.log(characterId)
        try {
            fetch(this.Project_ENDPOINT, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((result) => {
                console.log(result)
                this.get();
            })
        } catch(e) {
            console.log("There is an issue with Deleting Characters.")
        }
    }

    addWeapon = (name, slot, weaponType, clipType, specialType) => {
        console.log("name:", name, "slot:", slot, "weapon type:", weaponType, "clip type:", clipType, "special type:", specialType)
        try {
            fetch(this.Project_ENDPOINT + "/weaponInfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({WeaponName: name, WeaponSlot: slot, WeaponType: weaponType, ClipType: clipType, SpecialType: specialType}),
            }).then((result) => {
                this.get()
                console.log(result)
            })
        } catch(e) {
            console.log("There is an issue with Adding Weapons.")
        }
    }

    updateWeapon = (newName, weaponId) => {
        console.log(newName, weaponId)
        try {

        } catch(e) {
            console.log("There is an issue with Update Weapons.")
        }
    }

    deleteWeapon = (weaponId) => {
        console.log(weaponId)
        try {

        } catch(e) {
            console.log("There is an issue with Deleting Weapons.")
        }
    }

    addPower = (name, details) => {
        console.log("power name:", name, "power details:", details)
        try {

        } catch(e) {
            console.log("There is an issue with Adding Powers.")
        }
    }

    updatePower = (newName, powerId) => {
        console.log(newName, powerId)
        try {

        } catch(e) {
            console.log("There is an issue with Updating Powers.")
        }
    }

    deletePower = (powerId) => {
        console.log(powerId)
        try {

        } catch(e) {
            console.log("There is an issue with Deleting Powers.")
        }
    }
}
export const projectAPI = new ProjectAPI;