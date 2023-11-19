import Comment from '../../Components/Comment/Comment';
import './Comments.css'

const Comments = () => {
    const comments = [
        {
            userID: 1,
            userName: "JohnDoe",
            comment: "Great job on the project!"
        },
        {
            userID: 2,
            userName: "AliceSmith",
            comment: "I really enjoyed reading this article."
        },
        {
            userID: 3,
            userName: "BobJohnson",
            comment: "Could you provide more details on this topic?"
        },
        {
            userID: 4,
            userName: "EveWilliams",
            comment: "I have a suggestion for improvement."
        },
        {
            userID: 5,
            userName: "CharlieBrown",
            comment: "This is very informative. Thank you!"
        },
        {
            userID: 6,
            userName: "GraceMiller",
            comment: "Interesting points raised here."
        },
        {
            userID: 7,
            userName: "DavidClark",
            comment: "I have a question about the second paragraph."
        },
        {
            userID: 8,
            userName: "SophieDavis",
            comment: "Well-written and easy to understand."
        },
        {
            userID: 9,
            userName: "MichaelJones",
            comment: "Looking forward to more content like this."
        },
        {
            userID: 10,
            userName: "OliviaBrown",
            comment: "I appreciate the effort you put into this."
        },
        {
            userID: 11,
            userName: "WilliamSmith",
            comment: "Can you elaborate on the third point?"
        },
        {
            userID: 12,
            userName: "EmmaJohnson",
            comment: "I have a different perspective on this matter."
        }
    ];
  return (
    <div className='comment-container'>
      {
        comments.map((comment) => <Comment key = {comment.userID} comment = {comment}/>)
      }
    </div>
  )
}

export default Comments
