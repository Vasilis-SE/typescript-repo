const titles = [
    "Hello World",
    "Hello Typescipt",
    "Hello Javascript",
    "Hello VSCode"
]

document.getElementById('title-switcher')?.addEventListener('click', () => {
    const currentTitleEle = document.getElementById('page-title');
    const currentTitle = currentTitleEle!.innerText;
    const currentTitleIndex = titles.indexOf( currentTitle );
    let newTitleIndex = 0;

    if(currentTitleIndex === -1) return;
    if(typeof titles[currentTitleIndex + 1] !== "undefined") 
        newTitleIndex = currentTitleIndex + 1;
    
    currentTitleEle!.innerText = titles[newTitleIndex];
})