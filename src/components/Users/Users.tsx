const Users = (props: any) => {
    return (     
    <div>
        {Array.isArray(props.users)
          ? props.users[0].map((user: any) => {
              console.log("map")
              return (
                <li
                  key={user.id}
                  className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
                >
                  {user.email}
                </li>
              );
            })
          : null}
      </div> );
}
 
export default Users;