

const header = document.querySelector('#header')
const main = document.querySelector('#main')
const divHide = document.querySelector('#hide')

const arrayText = [
    {
        'name': 'Carlos Eduardo',
        'yearsOld': 26,
        'profession': 'fisicEducation'
    },
    {
        'name': 'Artur Santana',
        'yearsOld': 27,
        'profession': 'Teacher English'
    },
    {
        'name': 'Renata Apolinária',
        'yearsOld': 24,
        'profession': 'Doctor'
    },
    {
        'name': 'Kelly Silva',
        'yearsOld': 31,
        'profession': 'fisicEducation'
    }
    
]

const arrayTitle = [
    'Home','Teach','About','Training'
]



const getAll = () => {

            //TITLE FROM PAGE//
    const div = document.createElement('div')
    div.classList.add('title')
    arrayTitle.map((title) => {

        const link = document.createElement('a')
        header.appendChild(div)
        div.appendChild(link)
        link.innerText = title

                //SUBTITLE INSIDE TITLE(TEAHC)//
    arrayText.map((array) => {
        
        const liMenu = document.createElement('li')
        link.appendChild(liMenu)
        liMenu.innerText = array.name
        const ul = document.createElement('ul')
        liMenu.appendChild(ul)
        liMenu.classList.add('hide')

        link.addEventListener('click', () => {
            liMenu.classList.toggle('hide')
        })
        
    })
})


    
}
getAll()

const ApiTodos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos/'
    const response = await fetch(url)
    const data = await response.json()
    
    data.map((posts) => {
        
        const divMain = document.createElement('div')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const button = document.createElement('button')
        
        img.src = posts.thumbnailUrl
        p.innerText = posts.title
        button.innerText = 'Starting Training'

        divMain.classList.add('this')
        
        divMain.appendChild(img)
        divMain.appendChild(p)
        divMain.appendChild(button)
        main.appendChild(divMain)
        
        main.classList.add('show')
        
        
        
    })
    
    
}
ApiTodos()