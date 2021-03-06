//  Init/instantiate Github class
const github = new Github();
//  Init/instantiate ui
const ui = new UI();

//  Search Input
const $searchUser = document.querySelector('#search-user');

//  Search input event listener
$searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if(userText !== '') {

        //  Make http call with github class
        //gives back profile object of data if success, gives back message 'Not Found' if no profile exists
        github.getUser(userText)
            .then(data => {
                //check if profile exists
                if(data.profile.message === 'Not Found') {
                    //  Show Alert with UI class
                    ui.showAlert('User not found', 'alert alert-danger')
                } else {
                    //  Show Profile and repos with UI class
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        //  Clear profile with UI class
        ui.clearProfile();
    }
});