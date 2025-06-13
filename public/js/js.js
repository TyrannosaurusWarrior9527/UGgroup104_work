/* Basic Reset and Layout */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

nav {
  background-color: #004466;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav img {
  height: 50px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  transition: background 0.3s;
}

nav ul li a:hover {
  background-color: #006699;
  border-radius: 5px;
}

h1, h2 {
  margin: 20px;
  color: #004466;
}

main, .hotCity, .hotAttraction, .news, .culture {
  padding: 20px;
}

.hotCity, .hotAttraction, .news, .culture {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.hotCity img, .hotAttraction img, .news img, .culture img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

.index_Attraction {
  display: block;
  margin: 30px auto;
  width: fit-content;
  padding: 10px 20px;
  background-color: #004466;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

.index_Attraction:hover {
  background-color: #006699;
}

footer {
  background-color: #004466;
  color: white;
  padding: 20px;
  margin-top: 40px;
}

footer .foot {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

footer h2 {
  margin-bottom: 10px;
}
