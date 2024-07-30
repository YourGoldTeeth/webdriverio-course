import BlogPage from "../pages/blog-page";

describe('Blog Page', () => {
    it('get list, assert length of 10, assert count of rows', async () => {
        //get list of recent posts
        await BlogPage.open();
        
        const recentPosts = await BlogPage.newestPosts;

        //assert text length of 10
        for (const post of recentPosts) {
            const text = await post.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        //assert total count of rows = 5
        await expect(recentPosts).toHaveLength(5);
    });
});