


fetch("https://ajax.test-danit.com/api/json/posts")
    .then(response => response.json())
    .then(posts => posts.forEach(e => new Card(e).userPosts ()));




class Card {
    constructor(posts) {
        // const {id, name, email} = users
        const {id, userId, title, body} = posts


        // this.id = id
        // this.name = name
        // this.email = email

        this.id = id
        this.userId = userId
        this.title = title
        this.body = body
    }

    userPosts () {
        fetch("https://ajax.test-danit.com/api/json/users")
    .then(response => response.json())
    .then(users => users.forEach(e => this.userId === e.id ? this.render(e) : false));

    }

    render ({name, email})  {
        const element = document.createElement('div')
        const icon = document.createElement('div')

        element.innerHTML = `
        <h2>${this.title}</h2>
        <p>${this.body}</p>
        <p>${name}</p><p>${email}</p>
        `
        element.style.cssText = `background-color: #f2f2f2; border: 1px solid black; padding: 40px; text-align: center; margin: 10px 300px;`

        icon.innerHTML = `<div><?xml version="1.0" ?><svg width="30px" enable-background="new 0 0 40 40" id="Слой_1" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1c0,2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16   c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,28,40z"/></g><g><path d="M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,13h26.9   c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,19.9,2z M33.3,11H6.5   c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,34.5,11,33.3,11z"/></g><g><path d="M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z"/></g><g><path d="M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z"/></g><g><path d="M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z"/></g></svg></div>`

        icon.style.cssText = `display: flex; justify-content: end`

        element.append(icon)

        document.body.append(element)

        icon.addEventListener("click", () => {
            fetch(`https://ajax.test-danit.com/api/json/posts/${this.id}`, {
                method: 'DELETE',
            })
                .then(response => response.status && response.ok ? element.remove() : false)
        })
    }
}