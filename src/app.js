console.log(data);

// WRITE YOUR CODE BELOW!

// Instructions
// - Use this template as a starting point (don't do Codesandbox, (do recreational drugs instead). Download it to your device) => https://codesandbox.io/s/day-8-dog-owners-app-template-t4um2?file=/src/index.js
// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog


function isDogNaughty(dog) {

    const dogBtnSection = document.createElement('div')
    dogBtnSection.setAttribute('class', 'main__dog-section__btn')

    const dogNaughtyTextPEl = document.createElement("p")
    const dogNaughtyTextEmEl = document.createElement("em")
    const dogGoodBtnEl = document.createElement('button')

    let dogNaughty = !dog.isGoodDog

    console.log(dog.isGoodDog)

    let dogNaughtyText = ""
    let dogNaughtyTextButton = ""

    function changeDogBehaviour(dogBehaviour) {
        if (dogBehaviour) {
            dogNaughtyText = "Yes!"
            dogNaughtyTextButton = "Good Dog"
            dogNaughtyTextEmEl.textContent = `Is Naughty? ${dogNaughtyText}`
            dogGoodBtnEl.textContent = dogNaughtyTextButton
        } else {
            dogNaughtyText = "No!"
            dogNaughtyTextButton = "Bad Dog"
            dogNaughtyTextEmEl.textContent = `Is Naughty? ${dogNaughtyText}`
            dogGoodBtnEl.textContent = dogNaughtyTextButton
        }
    }

    changeDogBehaviour(dogNaughty)

    dogGoodBtnEl.addEventListener("click", () => {
        dog.isGoodDog = !dog.isGoodDog
        dogNaughty = !dogNaughty

        changeDogBehaviour(dogNaughty)
    })

    dogNaughtyTextPEl.append(dogNaughtyTextEmEl);
    dogBtnSection.append(dogNaughtyTextPEl)
    dogBtnSection.append(dogGoodBtnEl)

    return dogBtnSection
}

function dogSelector(dog) {
    const mainDogSection = document.querySelector('.main__dog-section')

    const dogName = document.createElement('h2')
    dogName.textContent = dog.name

    const dogImgEl = document.createElement('img')
    dogImgEl.setAttribute("src", dog.image)

    const dogInfoEl = document.createElement('div')
    dogInfoEl.setAttribute('class', 'main__dog-sectin__desc')

    const dogBioTitleEl = document.createElement('h3')
    dogBioTitleEl.textContent = "Bio"

    const dogBioEl = document.createElement('p')
    dogBioEl.textContent = dog.bio

    dogInfoEl.append(dogBioTitleEl)
    dogInfoEl.append(dogBioEl)
    dogInfoEl.append(isDogNaughty(dog))

    mainDogSection.append(dogName)
    mainDogSection.append(dogImgEl)
    mainDogSection.append(dogInfoEl)

    return mainDogSection
}

function createDogList(dog) {
    const dogsList = document.querySelector('.dogs-list')

    for (const d in data) {
        let dogsListButton = document.createElement('li')
        dogsListButton.setAttribute('class', 'dogs-list__button')
        dogsListButton.textContent = dog[d].name
        dogsList.append(dogsListButton)
    }
    return dogsList
}

const header = document.querySelector('header')
const main = document.querySelector('main')

header.append(createDogList(data))

const dogsListButtons = document.querySelectorAll('.dogs-list__button')
const mainDogSection = document.querySelector('.main__dog-section')

dogsListButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        while (mainDogSection.firstChild)(
            mainDogSection.removeChild(mainDogSection.firstChild)
        )

        main.append(dogSelector(data[index - 1]))
    })
})