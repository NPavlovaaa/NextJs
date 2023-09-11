import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    return(
        <MainContainer keywords="Пользователи">
            <h1>Пользователи</h1>
            <ul>
                {users.map(item =>
                    <li key={item.id}>
                        <A href={`users/${item.id}`} text={item.name} color="black"/>
                    </li>
                )}
            </ul>
        </MainContainer>
    )

}
export default Users;

export async function getStaticProps() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
        props: {users}, // will be passed to the page component as props
    }
}