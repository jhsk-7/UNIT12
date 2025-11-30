// Part 2 A - class constructor for blog posts.
export default class Post {
    constructor(title, content){
        this.title = title;
        this.content = content
    } 
    publish(){
        return console.log(`Title: ${this.title} > Content: ${this.content}`)
    }
}

