#### Browser Router to create a new router

#### Route for every single page, provide the path and what to do when user visits that path.

// Added historyApiFallback: true to work the routing and error

// Single instance of BrowserRouter can have multiple routes

// Exact = true; this would match the routes will only show expense dashboard page at the root of the app.

#### SWITCH

- When react router sees switch, stops when it finds a match.
- Doesn't check others when it finds a match.
- It will stop at the bottom and show the error if there are no match.

#### LINK

- Doesn't cause full page request and makes things faster.
- Client side routing internally use LINK as opposed to the anchor tag.

# REDUCERS

1. Reducers are pure functions
2. Never change state or action / don't mutate actions
3. Doesn't get affected outside variables

- (e.g const add =(a,b) => a + b)

# combineReducers

- Call combine reducer passing the return value into the create store
- defined what our store to look like
- We have object, expenses and filters managed by their respective reducer
