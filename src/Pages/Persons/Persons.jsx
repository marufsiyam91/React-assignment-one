
import '../Persons/Persons.css'
import Person from '../../Components/Person/Person'


const Persons = () => {
    const Persons = [
        {
          name: "John Doe",
          avatar: "https://i.postimg.cc/4x7LGSVx/user.png",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed libero non mi semper semper. Vestibulum quam mauris, tincidunt eget semper ac, ",
        },
        {
          name: "David Smith",
          avatar: "https://i.postimg.cc/4x7LGSVx/user.png",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed libero non mi semper semper. Vestibulum quam mauris, tincidunt eget semper ac, ",
        },
        {
          name: "Michael Johnson",
          avatar: "https://i.postimg.cc/4x7LGSVx/user.png",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed libero non mi semper semper. Vestibulum quam mauris, tincidunt eget semper ac, ",
        },
        {
          name: "Robert Williams",
          avatar: "https://i.postimg.cc/4x7LGSVx/user.png",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed libero non mi semper semper. Vestibulum quam mauris, tincidunt eget semper ac, ",
        },
        {
          name: "James Miller",
          avatar: "https://i.postimg.cc/4x7LGSVx/user.png",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed libero non mi semper semper. Vestibulum quam mauris, tincidunt eget semper ac, ",
        },
        {
          name: "Sami Yusuf",
          avatar: "https://i.postimg.cc/4x7LGSVx/user.png",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed libero non mi semper semper. Vestibulum quam mauris, tincidunt eget semper ac, ",
        },
      ];
      
  return (
    <div className='person_container'>
            {
                Persons.map((person, index) => < Person key={index}  Person = {person}/>)
            }
    </div>
  )
}

export default Persons