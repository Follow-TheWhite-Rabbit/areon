

const buttonIp = document.querySelector(".button-ip")

buttonIp.addEventListener("click", async () => {

    let user = document.querySelector(".user")
    if (user) user.remove()

    let userIp = await fetch("https://api.ipify.org/?format=json")
    let ipInfo = await userIp.json()


    let userAddress = await fetch(`http://ip-api.com/json/${ipInfo.ip}`)
    let addressInfo = await userAddress.json()


    const element = document.createElement('div')
    element.classList = "user"


    element.innerHTML = `
    <p>${addressInfo.timezone}</p>
    <p>${addressInfo.country}</p>
    <p>${addressInfo.region}</p>
    <p>${addressInfo.city}</p>
    <p>${addressInfo.regionName}</p>
    `

    element.style.cssText = `background-color: #f2f2f2; border: 1px solid black; padding: 40px; text-align: center; margin: 10px 300px;`

    document.body.append(element)

    // console.log("userIp", ipInfo)
    // console.log("userAddress", addressInfo)
})

