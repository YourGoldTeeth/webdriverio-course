import NavComponent from './components/nav-comp';

class BlogPage {
    open() {
        return browser.url('/blog');
    }

    get newestPosts() {
        return $$('#recent-posts-3 li')
    }


}


export default new BlogPage();