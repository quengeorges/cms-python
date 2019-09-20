{
    document.querySelector('#test').addEventListener('click', () => {
        fetch('/polls/test')
            .then((response) => { return response.json() })
            .then((data) => { console.log(data) })
    })
}