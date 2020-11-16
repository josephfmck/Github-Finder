class Github {
    constructor() {
        //github OAuth API Info
        this.client_id = 'c9a498f36a47b2eee938';
        this.client_secret = 'c12231d7a325860dffa56d122137f728aa8a3fad';
        //amount repos to grab
        this.repos_count = 5;
        //format response, latest repos first
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        //  2 requests: user profile and repos

        //1Get user profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        //2Get repos of user
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        //1grab json data
        const profileData = await profileResponse.json();

        //2grab repo json data
        const repoData = await repoResponse.json();

        //1+2 return object of data that has key of profile and repos
        return {
            profile: profileData,
            repos: repoData
        }
    }
}