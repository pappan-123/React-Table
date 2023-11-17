const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, name, email,phone} = curUser;
                    const {street, city, zipcode,suite} = curUser.address; /*as address is in form of object*/
                    return (
                        /*Warning: Each Child in a List Should Have a Unique 'key' Prop.Here we pass id as unique key*/
                        <tr key={id}>  
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{street},{suite}, {city}, {" "}, {zipcode}</td>
                            <td>{phone}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;