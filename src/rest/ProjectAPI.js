

const Project_ENDPOINT = 'https://6405117feed195a99f7baa23.mockapi.io/CharaList/Webpage'

class ProjectAPI {
    constructor() {
        // Trying to set the array for each category here, do not know if this can be done in the API
        this.state = {
            characterList: [],
            weaponList: [],
            powerList: [],
        }
    }
    //Read Command for the Entire Project.
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
    //Commands for the Character to be uploaded, updated and deleted from the API.

    addCharacter = (name, gender, race, nationality, occupation, description, backstory) => {
        console.log("name:", name, "gender:", gender, "race:", race, "nationality:", nationality, "occupation:", occupation, "description:", description, "backstory:", backstory)
        try {
            // Note: Find a way to upload the Arrays to the API in this function
            fetch(Project_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name: name, gender: gender, race: race, nationality: nationality, occupation: occupation, description: description, backstory: backstory}),
            }).then((result) => {
                this.get();
                console.log("test")
                console.log(result)
                return result
            })
        } catch(e) {
            console.log("There is an issue with Adding Characters.")
        }
        this.get();
    }

    updateCharacter = (newName, characterId) => {
        console.log("new name:", newName, "character id:", characterId)
        try {
            fetch(Project_ENDPOINT + "/" + characterId, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: newName })
            }).then((result) => {
                this.get();
                console.log(result)
                return result
            })
        } catch (e) {
            console.log("There is an issue with Updating Characters.")
        }
        this.get();
    }

    deleteCharacter = (characterId) => {
        console.log(characterId)
        try {
            fetch(Project_ENDPOINT + "/" + characterId, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((result) => {
                console.log("test")
                console.log(result)
                return result
            })
        } catch(e) {
            console.log("There is an issue with Deleting Characters.")
        }
        //this.get();
    }

    //Commands for the Weapons (trying to do it locally and nested it inside the character)

    addWeapon = (name, slot, weaponType, clipType, specialType) => {
        console.log("name:", name, "slot:", slot, "weapon type:", weaponType, "clip type:", clipType, "special type:", specialType)
        // this.setState({ weaponList: [...this.state.weaponList, ...[this.state.name, this.state.slot, this.state.weaponType, this.state.clipType, this.state.specialType ]]})
        console.log(this.state.weaponList)
        try {
            fetch(Project_ENDPOINT + "/weaponInfo", {
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

    updateWeapon = (newName, characterId, weaponId) => {
        console.log("new name:", newName, "character id:", characterId, "weapon id:", weaponId)
        try {
            fetch(Project_ENDPOINT + "/" + characterId + "/weaponInfo/" + weaponId, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ Weaponname: newName })
            }).then((result) => {
                this.get()
                console.log(result)
            })
        } catch(e) {
            console.log("There is an issue with Update Weapons.")
        }
    }

    deleteWeapon = (characterId, weaponId) => {
        console.log("character id:", characterId, "weapon id:", weaponId)
        try {
            fetch(Project_ENDPOINT + "/" + characterId + "/weaponInfo/" + weaponId, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((result) => {
                console.log(result)
                this.get()
            })
        } catch(e) {
            console.log("There is an issue with Deleting Weapons.")
        }
    }

    // Commands for the Powers (similarly trying to store locally in a setState before the Character is added with them)

    addPower = (name, details) => {
        console.log("power name:", name, "power details:", details)
        try {

        } catch(e) {
            console.log("There is an issue with Adding Powers.")
        }
    }

    updatePower = (newName, characterId, powerId) => {
        console.log("new name:", newName, "character id:", characterId, "power id:", powerId)
        try {
            fetch(Project_ENDPOINT + "/" + characterId + "/powerInfo/" + powerId, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ PowerName: newName })
            }).then((result) => {
                console.log(result)
                this.get()
            })
        } catch(e) {
            console.log("There is an issue with Updating Powers.")
        }
    }

    deletePower = (characterId, powerId) => {
        console.log("character id:", characterId, "power id:", powerId)
        try {
            fetch(Project_ENDPOINT + "/" + characterId + "/powerInfo/" + powerId, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((result) => {
                console.log(result)
                this.get()
            })
        } catch(e) {
            console.log("There is an issue with Deleting Powers.")
        }
    }
}
export const projectAPI = new ProjectAPI;