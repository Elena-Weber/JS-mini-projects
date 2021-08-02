const pics = ['https://images.unsplash.com/photo-1615129549504-de19ba618eee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', 
'https://images.unsplash.com/photo-1563127830-b94f0c127c52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', 
'https://images.unsplash.com/photo-1613425653628-23fd58c3c2b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
'https://images.unsplash.com/photo-1559637377-f7174e3ff57c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'];

let i = 0;

const previous = document.querySelector('#previous');
previous.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = pics.length-1;
    }
    document.querySelector('#pics').src = pics[i];
})

const next = document.querySelector('#next');
next.addEventListener('click', () => {
    i++;
    if (i > pics.length-1) {
        i = 0;
    }
    document.querySelector('#pics').src = pics[i];
})