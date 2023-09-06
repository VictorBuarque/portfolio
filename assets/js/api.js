//Dando fetch no portifólio do github
//Lembrar sempre de pegar o raw para usar
async function fetchProfileData(){
    const url = "https://raw.githubusercontent.com/VictorBuarque/portifolio/main/data/profile.json";
    const fetching = await fetch(url)
    return await fetching.json()
}