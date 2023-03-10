function openBar(){
    console.log('bar open')
    if (localStorage.getItem('barOpen') == "false") {
    const freez_bar = document.getElementById('freez_bar');
    freez_bar.classList.add('_visible');
    localStorage.setItem('barOpen','true');
    } else {
        const freez_bar = document.getElementById('freez_bar');
        freez_bar.classList.remove('_visible');
        localStorage.setItem('barOpen','false');
    }
}

