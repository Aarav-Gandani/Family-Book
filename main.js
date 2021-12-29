var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://th.bing.com/th/id/OIP.8wPEOFeGQ0C_YDC_4BsujwHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7" , "https://th.bing.com/th/id/OIP.Q5WefRLZSw7nU3BdyO80AAHaKp?w=137&h=197&c=7&r=0&o=5&pid=1.7", "https://th.bing.com/th/id/OIP.BCzXrBYuurf4v1eAYMFYHAHaNf?w=185&h=337&c=7&r=0&o=5&pid=1.7", "https://th.bing.com/th/id/OIP.5DHJkLQq-a0zXjTHOA7_GQAAAA?w=180&h=346&c=7&r=0&o=5&pid=1.7", "https://th.bing.com/th/id/OIP.3kuZfonfdeIB6pt_0MDbLAHaIk?w=158&h=182&c=7&r=0&o=5&pid=1.7"];
var names = ["Fmaily Book","Pratap Gandani", "Nayna Gandani", "Rahul Gandani", "Avani Gandani", "Aarav Gandani" , "I love my family!"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
