//  Init/instantiate Github class
const github = new Github();


//  Search Input
const $searchUser = document.querySelector('#search-user');

//  Search input event listener
$searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if(userText !== '') {
        console.log(userText);

        //  Make http call with github class
        //gives back profile if success, gives back message 'Not Found' if no profile exists
        github.getUser(userText)
            .then(data => {
                //check if profile exists
                if(data.profile.message === 'Not Found') {
                    //  Show Alert with UI class
                    console.log('Profile not found')
                } else {
                    //  Show Profile with UI class
                    console.log(data);
                }
            });
    } else {
        //  Clear profile with UI class
    }
});