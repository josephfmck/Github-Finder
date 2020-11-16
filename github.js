class Github {
    constructor() {
        //github OAuth API Info
        this.client_id = 'c9a498f36a47b2eee938';
        this.client_secret = 'c12231d7a325860dffa56d122137f728aa8a3fad';
    }

    async getUser(user) {
        //  2 requests: user profile and repos

        //Get user profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        //grab json data
        const profileData = await profileResponse.json();

        //return object of data that has key of profile
        return {
            profile: profileData
        }

        //Get repos of user

    }
}