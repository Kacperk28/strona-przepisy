function toggleRecipe(element) {
    const content = element.querySelector('.recipe-content');
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
    } else {
        content.classList.add('active');
    }
}