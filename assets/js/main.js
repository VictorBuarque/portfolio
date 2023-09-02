function updateProfileInfo(profileData){
   const photo = document.getElementById("profile.photo")
   photo.src = profileData.photo
   photo.alt = profileData.name
   
}


//Dando fetch no data
(async () => {
    const profile = await fetchProfileData()
    updateProfileInfo(profile)

})()