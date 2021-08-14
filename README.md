# SoundTree

SoundTree is a music discovery platform that allows users to find associated genres of their favorites and their respective songs. It also contains a forum to interact with others, and a latest news page to make it a single source that users will love to frequent often.

## SETUP

Fork this repository, then clone your fork of this repository.

You need **TWO** terminals for this.

In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development by default). Run `bin/rails s` to run the server.

In the other terminal, `cd` into `client`. Run `npm install`. Rename the `.env.example` file to be called `.env`. Then run `npm start` and go to `localhost:3000` in your browser.


## Final Product

!["Screenshot of home page"](https://github.com/Soliloquiy/SoundTree/blob/master/docs/homepage-1.png)
!["Screenshot of home page-2"](https://github.com/Soliloquiy/SoundTree/blob/master/docs/homepage-2.png)
!["Screenshot of home page-3"](https://github.com/Soliloquiy/SoundTree/blob/master/docs/homepage-3.png)
!["Screenshot of discover page"](https://github.com/Soliloquiy/SoundTree/blob/master/docs/discoverpage-1.png)
!["Screenshot of discover page-2"](https://github.com/Soliloquiy/SoundTree/blob/master/docs/discoverpage-2.png)
!["Screenshot of forum page"](https://github.com/Soliloquiy/SoundTree/blob/master/docs/forumpage-1.png)
!["Screenshot of forum page-2"](https://github.com/Soliloquiy/SoundTree/blob/master/docs/forumpage-2.png)
!["Screenshot of profile page"](https://github.com/Soliloquiy/SoundTree/blob/master/docs/profilepage-1.png)
!["Screenshot of latest page"](https://github.com/Soliloquiy/SoundTree/blob/master/docs/latestnewspage-1.png)



## Dependencies
- Axios
- Classnames
- Normalize.css
- React
- React-dom
- React-scripts
- Node-sass
- Prop-types
- React-test-renderer