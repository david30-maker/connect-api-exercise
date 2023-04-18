import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from '../feature/userSlice';

const UsersView = () => {
    const data = useSelector(state => state.user);
    const { isLoading, error, posts } = data;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost());
    }, [dispatch]);

    if (isLoading) {
        return <p>Please wait it is loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!posts) {
        return null;
    }

    return (
        <div>
            {posts.results.map(user => {
                console.log(user);
                return (
                    <ul classNmae="list" key={user.login.uuid}>
                        <li>First Name: {user.name.first}</li>
                        <li>Last Name: {user.name.last}</li>
                    </ul>
                );
            })}
        </div>
    );
}

export default UsersView