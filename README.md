# find-followers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

Being a new user of Angular CLI, I, Ben Krier speaking here, am not entirely sure how someone cloning this repo would set it up locally. I'm guessing you're going to need the node_modules, so if `ng serve` doesn't do the trick, probably `npm install` is the next best thing, then `npm start` to get the dev server running.

Both of these should be done, by the way, after entering the directory of the repo with `cd`.

Just remembered that for all the ng stuff to work, you're going to need the Angular CLI for yourself. Here's the link one more time, [Angular CLI](https://github.com/angular/angular-cli), so you can go and get it. It's awesome.

Enjoy!

# Here's a few instructions from Angular that should help along the way.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Dev notes on the project.

This was a fun project for getting to know how to connect to a well documented API with Angular. Some challenges along the way were: getting familiar with Typescript's syntax, decorators, and type declarations, learning how services can feed data to components, and figuring out how form data can be kept in state while moving forwards and backwards between sibling components.

## Next steps moving forward:

1. Turn the Input into a FormGroup using the FormBuilder module.
2. Have the input search the Gituhub users endpoint providing an autocomplete list of likely matches. Then upon clicking search, the chosen user is given as the username to get the followers.
3. Figure out a formula to stop the Next button from going on endlessly. Also, reset the page number upon each new search. This was a bug caught late in the game.
4. Create classes for User and Follower and tighten up the typing so that I'm not using any anymore.
5. Fill out the unit tests of the components to check for more than just component rendering.
6. Add list and page-transition animations. I've seen nice animations on other Angular pages and would like to have some myself. I also like the animation styles of Material Design and so would like to somehow leverage the component framework with the app animations.
