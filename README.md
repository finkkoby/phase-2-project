Welcome to Koby's Current Favorites!

I wanted to create something that allowed me to keep track of all of my favorite things.

I thought that this would be the perfect way to apply what I have been learning.

 ## npm start

 Once the page loads, you will see the home page with a couple of links.
 The three in the center lead to different pages that render my favorite things in that category.
 The NavBar component also shows two elements one that allows you to return to this page from anywhere, and one that allows you to add a new item! More on that later.

 Once you click on one of the three main categories, the NavBar updates to allow you to switch between pages/categories.
 You still have the option to return home or add a new item.
 Each item in the list of favorites also has an 'x' in the top right which allows you to remove that item.

 The 'Add New' page renders a form to allow you to add a new item. The input fields update based on what type of item you are trying to add, as well as the preview that renders below. Due to the different information need for each type of item, there is a separate component for each form type, as well as for each item card. On this page, there is a default picture provided for each card. The add new button sends a POST request to your server with the new item info, and the page redirects to the respective category page so you can check out your new item!

Images used:
https://i1.sndcdn.com/artworks-F5H85xHY4qId6Lt2-Y3Ylig-t500x500.jpg
https://upload.wikimedia.org/wikipedia/en/e/e0/Beyonc%C3%A9_-_Texas_Hold_%27Em.png
https://images.genius.com/324acb2792e1aec593b539054faab2ea.1000x1000x1.png
https://m.media-amazon.com/images/I/91ZnMXRcocL._UF1000,1000_QL80_.jpg
https://upload.wikimedia.org/wikipedia/en/8/80/Red%2C_White_%26_Royal_Blue_Book_Cover.jpg
https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634067514i/53217284.jpg
https://m.media-amazon.com/images/I/816JhuO1cyS._AC_UF1000,1000_QL80_.jpg
https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446469353i/22822858.jpg
https://upload.wikimedia.org/wikipedia/en/a/a6/AbbottElementaryS1DVD.jpg
https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg
https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p184399_b_v13_av.jpg
https://m.media-amazon.com/images/M/MV5BOWVkOTM4MDAtMTkwMS00ZTE0LTk0ZGMtNDQzOTYyOGNiNjg0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg
https://m.media-amazon.com/images/I/31Lw+SqElDL._AC_UF894,1000_QL80_.jpg
https://t3.ftcdn.net/jpg/00/63/63/46/360_F_63634678_7ea6wuF1yvCq7NKkCAGnYUmcrsQEpEdm.jpg
https://media.istockphoto.com/id/451338029/photo/vinyl-record.jpg?s=612x612&w=0&k=20&c=h_DUl-RXAlBvLz2dH_EgPEr7kpcwFLzwqE8Ir3xXUEg=