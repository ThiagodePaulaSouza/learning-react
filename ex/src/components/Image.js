import mountain from "../assets/mountain.jpg";
const image = () => {
    return (
        <div>
            <img src="/pirate.jpg" />
            <img src={mountain}/>

        </div>
    )
}
export default image;