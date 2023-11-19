import '../Person/Person.css'

const Person = ({Person}) => {
    const {name, avatar, bio} = Person
    
  return (
    <>
        <div className='detail_cart'>
          <img src={avatar} alt="" />
          <h3>Name: {name}</h3>
          <p>Details: {bio}</p>
        </div>
    </>
  )
}

export default Person
