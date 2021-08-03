const pics = ['https://images.unsplash.com/photo-1589584556363-b90f6bcc7149?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 
    'https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmFjYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', 
    'https://images.unsplash.com/photo-1566371486490-560ded23b5e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmFjYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', 
    'https://images.unsplash.com/photo-1615129549504-de19ba618eee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', 
    'https://images.unsplash.com/photo-1563127830-b94f0c127c52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', 
    'https://images.unsplash.com/photo-1613425653628-23fd58c3c2b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
    'https://images.unsplash.com/photo-1559637377-f7174e3ff57c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', 
    'https://images.unsplash.com/photo-1563806162750-3a24d473d648?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', 
    'https://images.unsplash.com/photo-1550096197-82e4b82a78a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1589705149724-1379ec03e196?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'];

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