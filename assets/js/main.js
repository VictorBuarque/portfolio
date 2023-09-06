//Transformando as informações do data json para html
function updateProfileInfo(profileData){
   const photo = document.getElementById("profile.photo")
   photo.src = profileData.photo //atribuindo os dados json ao atributo da tag
   photo.alt = profileData.name //atribuindo os dados json ao atributo da tag

   const name = document.getElementById("profile.name")
   name.innerText = profileData.name

   const job = document.getElementById("profile.job")
   job.innerText = profileData.job

   const location = document.getElementById("profile.location")
   location.innerText = profileData.location

   
   const phone = document.getElementById("profile.phone")
   phone.innerText = profileData.phone
   phone.href =`tel:${profileData.phone}`

   const email = document.getElementById("profile.email")
   email.innerText = profileData.email
   email.href =`maitlto:${profileData.email}`
}
//Transformando os soft skills do data em list itens.
function updateSoftSkills(profileData) {
    const soft = document.getElementById("profile.skills.softSkills")
    soft.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}
//Transformando os hardskills do data em list itens com imagens.
function updateHardSkills(profileData) {
    const hard = document.getElementById("profile.skills.hardSkills")
    hard.innerHTML = profileData.skills.hardSkills.map(skill => 
    `<li> <img src="${skill.logo}" alt="${skill.name}"title="${skill.name}"></li>`).join('')
}
//Transformando as languages do data em list itens.
function updateLanguages(profileData){
    const mylanguages = document.getElementById('profile.languages')
    mylanguages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('\n')
}
//Transformando o portfolio do data em list itens.
function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `<li>
        <h3 ${project.github ? 'class="github"' : ''}>
           <a href="${project.url}" target="_blank">${project.name}</a>
        </h3>
        </li>`}).join('')
}
//Transformando as experiências do data em list itens.
function updateExperiences(profileData){
    const experiences = document.getElementById('profile.professionalExperience')
    experiences.innerHTML = profileData.professionalExperience.map(professionalExperience => {
        return `
        <li>
            <h3 class="title">${professionalExperience.name}</h3>
            <p class="period">${professionalExperience.period}</p>
            <p>${professionalExperience.description}</p>
        </li>`        
    })
}

//Dando fetch no data para que funcione na página de forma asyncrona.
(async () => {
    const profile = await fetchProfileData()
    updateProfileInfo(profile)
    updateSoftSkills(profile)
    updateHardSkills(profile)
    updateLanguages(profile)
    updatePortfolio(profile)
    updateExperiences(profile)
})()
