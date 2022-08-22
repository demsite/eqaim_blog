import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import style
import "./stylesheets/index.css";

//Import all components
import Navbar from "./components/Navbar";
const Post = lazy(() => import("./components/Post"));
const CreatePost = lazy(() => import("./components/CreatePosts"));
const PostsList = lazy(() => import("./components/PostsList"));

const renderLoader = () => (
    <div className="spinner-container">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

const App = () => (
    <div className="eqaim_blog_wrapper">
        <Router>
            <Navbar />
            <Suspense fallback={renderLoader()}>
                <Switch>
                    <Route path="/" exact component={PostsList} />
                    <Route path="/posts" exact component={PostsList} />
                    <Route path="/posts/new/" exact component={CreatePost} />
                    <Route path="/posts/:id" exact component={Post} />
                </Switch>
            </Suspense>
        </Router>
    </div>
);

export default App;
