// Part 2 B - simulating publishing a blog post using post module.
import Post from "./Post.mjs"

const Post1 = new Post("Exclusive", "Preview of the new 'Beyond the Spider-Verse'")
console.log(Post1.publish())