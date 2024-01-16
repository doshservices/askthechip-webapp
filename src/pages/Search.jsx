import { useState } from "react";
import { SideNav } from "../components";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { UserSearch } from "../components/home/search/userSearch";
import { UserResults } from "../components/search/UserResults";
import { ThreeDots } from "react-loader-spinner";
import { useWindowWidth } from "../utils/windowWidth";
import { Header } from "../components/home";
import { api } from "../contexts";

const Search = () => {
    const [users, setUsers] = useState([])
    const [userValue, setUserValue] = useState("")
    const [results, setResults] = useState("all")
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => setUserValue(e.target.value)

    const { token } = useAuth()

    const fetchUsers = () => {
        setIsFetching(true)
        axios.get(`${api}/api/users/search?username=${userValue}&board=BLACK`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then((response) => {
                // console.log(response);
                setIsFetching(false)
                setUsers(response?.data?.data)
            }).catch((error) => {
                console.log(error, "hdfh");
                setIsFetching(false)
                setError(error.message)
            })
    }

    const width = useWindowWidth()

    return (
        <section className="pageLayout">
            <SideNav />
            <div className="pageLayout__wrapper__container border-[#EBEEF0]">
                {width < 480 ?
                    <Header /> : <></>
                }
                <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
                    <UserSearch value={userValue} onChange={handleChange} onClick={fetchUsers} />
                    {isFetching && <div className="flex h-fit justify-center items-center">
                        <ThreeDots
                            height="24"
                            width="70"
                            radius="9"
                            color="#068978"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div>}
                    {users?.userProfiles?.length > 0 ?
                        <>
                            <div className="flex justify-between mb-6">
                                <button onClick={() => setResults("all")} className={`block text-${results === "all" ? "light" : "dark2D"} bg-${results === "all" ? "primary" : "grey"} px-4 py-2 font-OpenSans rounded-[5px]`}>All</button>
                                <button onClick={() => setResults("posts")} className={`block text-${results === "posts" ? "light" : "dark2D"} bg-${results === "posts" ? "primary" : "grey"} px-4 py-2 font-OpenSans rounded-[5px]`}>Posts</button>
                            </div>
                            {results === "all" &&
                                <>
                                    {
                                        users?.userProfiles?.map((user) => {
                                            return (
                                                <div key={user._id}>
                                                    <UserResults users={user} />
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            }
                            {results === "posts" &&
                                <>
                                    {users?.postRelatedToUser > 0 ?
                                        <>
                                            {users?.postRelatedToUser?.map((user) => {
                                                return (
                                                    <>
                                                        <div key={user._id}>
                                                            <UserResults users={user} />
                                                        </div>

                                                    </>
                                                )
                                            })}
                                        </>
                                        : <p className="font-OpenSans mt-2 text-[1rem] font-[500] text-secondary">No Post is Related to this user</p>
                                    }
                                </>
                            }

                        </> : <p className="font-OpenSans mt-2 text-[1rem] font-[500] text-secondary">{error}</p>
                    }
                </div>
            </div>
        </section>
    )
}

export default Search;