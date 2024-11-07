"use client";
import { usePostList } from '@/hooks';
import { FilterPost, NotificationManager, TablePost } from '@/components';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Listado = () => {

    const { postList } = useSelector((state: RootState) => state.postStore);

    const {
        filter,
        error,
        loading,
        hasMore,
        handleFilter,
        handleDelete,
        handleClose
    } = usePostList();

    return (
        <>
            {error && <NotificationManager message={error} onClose={handleClose} />}
            <div className="px-10 mt-[12rem]">
                <div className='flex justify-between'>
                    <div>
                        <h1 className="text-2xl font-bold text-primary-text">Posts Management</h1>
                        <h4 className="text-10 font-medium mb-4 text-secundary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    </div>
                    <Link href="/post/create" className="flex bg-blue-600 hover:bg-blue-700 text-white font-semibold  rounded-md transition duration-200 ease-in-out text-center  px-5 h-10 items-center">
                        Create post
                    </Link>
                </div>
                <div className='flex justify-between mt-[50px]'>
                    <FilterPost handleFilter={handleFilter} filter={filter} totalPost={postList.length} />
                    <div className='flex flex-wrap gap-x-5 gap-y-7 w-[70%]'>
                        {postList.length > 0 && <TablePost post={postList} handleDelete={handleDelete} />}
                    </div>
                </div>
                {loading && <p className='text-center font-bold mb-5'>Loading...</p>}
                {!hasMore && <p className='text-center font-bold mb-5'>No more posts.</p>}
            </div>
        </>
    );
};

export default Listado;
